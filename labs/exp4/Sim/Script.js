var connections;
var endpoints = {};
var instance;

let ck = false;
let a = false;
let b = false;
let acSlider = true;
let stateA = false;
let stateB = false;
let stateC = false;

var red = {
  paintStyle: { fill: "red"},
  connector: ["Bezier", { curviness:-20  }],
 // connector: ["Straight", { stub: 5 }],
  connectorStyle: { stroke: "#2245FC", strokeWidth: 3 },
  connectorHoverStyle: { stroke: "rgb(0, 255, 0)", strokeWidth: 8 }
};
var black = {
  paintStyle: { fill: "blue"},
  //connector: ["Straight", { stub: 5 }],
  connector: ["Bezier", { curviness: 40  }],
  connectorStyle: { stroke: "#2245FC", strokeWidth: 3 },
  connectorHoverStyle: { stroke: "rgb(0, 255, 0)", strokeWidth: 8 }
};

var green = {
  paintStyle: { fill: "green"},
  connector: ["Bezier", { curviness:70 }],
  connectorStyle: { stroke: "#2245FC", strokeWidth: 3 },
  connectorHoverStyle: { stroke: "rgb(0, 255, 0)", strokeWidth: 3 }
};



let FanOn = false;
    let Fanflag = false;
    let Fanmove = false;

    

    function performHoverAcLoad() {
        $("#switch-c").css("cursor", "pointer");
        $("#switch-p").css("cursor", "pointer");

        $("#switch-c").click(() => {
          
            if (!FanOn) { 
                $("#switch-c").attr("src", "images/s2.png"); 
                FanOn = true;
                Fanflag = false;
                Fanmove = true;
                resetState();
            } else { 
                $("#switch-c").attr("src", "images/s1.png");
                $("#switch-p").attr("src", "images/s1.png");
                FanOn = false;
                Fanflag = true;
                Fanmove = false;

                // Disable functionality: reset everything to default state
                resetState();
            }
        });

        
      $("#switch-p").click(() => {
          if (Fanmove) {
              if (!Fanflag) {
                 

                  $("#timero").css("opacity", 0);
                  $("#knob").css("opacity", 1);
                  $("#timer-display").css("opacity", 1);
                  $("#no-r-c-o").css("opacity", 0);
                  $("#nc-t-o").css("opacity", 0);
                  $("#no-r-c").css("opacity", 1);
                  $("#nc-t").css("opacity", 1);
                  
                  $("#timer").css("opacity", 1);
                  $("#timero").css("opacity", 0);
                  $("#switch-p").attr("src", "images/s2.png");
                  $("#switch-c").attr("src", "images/s2.png");
                  Fanflag = true;
                  
                  let angle = 0;
                  let timerDuration = 0;
                  let interval;
                  let isDragging = false;
                  let countdownRunning = false;
                  const maxAngle = 255; // Changed from 270 to 255 degrees



                  const maxTime = 30;
                  
                  const knob = $('#knob');
                  const timerDisplay = $('#timer-display');
                  timerDisplay.prop('disable', false);
                  const coin = $('#coin');
                  const spnp = $('#pnp-sensor');
                  const rnor = $('#light');
                  const fan = $('#motor-fan');
                  const NR = $('#no-r-c');
                  const textNR = $('#no-r-t');
                  
                  knob.css('cursor', 'grabbing');
                  coin.css('cursor', 'grabbing');
                  
                  knob.on('mousedown', function(e) {
                      if (!countdownRunning) {
                          isDragging = true;
                          $(document).on('mousemove', rotateKnob);
                          $(document).on('mouseup', stopDragging);
                      }
                  });
                  
                  function rotateKnob(e) {
                    if (isDragging) {
                        const centerX = knob.offset().left + knob.width() / 2;
                        const centerY = knob.offset().top + knob.height() / 2;
                        const mouseX = e.pageX;
                        const mouseY = e.pageY;
                        const radians = Math.atan2(mouseY - centerY, mouseX - centerX);
                        angle = radians * (180 / Math.PI) + 90;
                        if (angle < 0) angle += 360;
                        angle = Math.min(Math.max(angle, 0), maxAngle); // Limit rotation to 0-255 degrees
                        knob.css('transform', `rotate(${angle}deg)`);
                        timerDuration = Math.round((angle / maxAngle) * maxTime);
                        timerDisplay.val(`${timerDuration}s`);
                    }
                }
                
                
                
                  
                  function stopDragging() {
                      isDragging = false;
                      $(document).off('mousemove', rotateKnob);
                      $(document).off('mouseup', stopDragging);
                  }
                  
                  timerDisplay.on('input', function() {
                      if (!countdownRunning) {
                          let value = parseInt($(this).val());
                          if (isNaN(value) || value < 0) value = 0;
                          if (value > maxTime) value = maxTime;
                          timerDuration = value;
                          angle = (timerDuration / maxTime) * maxAngle;
                          knob.css('transform', `rotate(${angle}deg)`);
                          $(this).val(`${timerDuration}s`);
                      }
                  });
                  coin.draggable('enable');
                  
                  coin.draggable({
                      
                      revert: true,
                      start: function(event, ui) {
                          if (countdownRunning || timerDuration <= 0) {
                              return false;
                          }
                      }
                  });
                  
                  spnp.droppable({
                      over: function(event, ui) {
                          $("#pnp").attr("src", "image/PNP-ON.jpg");
                      },
                      out: function(event, ui) {
                          $("#pnp").attr("src", "image/PNP-OFF.jpg");
                      },
                      drop: function(event, ui) {
                          $("#pnp").attr("src", "image/PNP-OFF.jpg"); //set final countdown start state
                          startCountdown();
                      }
                  });
                  
                  function startCountdown() {
                    if (interval) clearInterval(interval);
                    countdownRunning = true;
                    let timeLeft = timerDuration;
                    let currentAngle = angle;
                    timerDisplay.val(`${timeLeft}s`);
                    timerDisplay.prop('disabled', true); // Disable input during countdown
                    coin.draggable('disable');
                    coin.css('cursor', 'not-allowed');
                    knob.css('cursor', 'not-allowed');
                    $("#nor-power-1").attr("src", "image/Nc(R).png");
                    $("#nor-power-2").attr("src", "image/Nc(R).png");
                    $("#nor-power-1T").text("Nc(R)");
                    $("#nor-power-2T").text("Nc(R)");
                    NR.attr('src', 'image/Nc(R).png');
                    textNR.text("Nc(R)");
                
                    // Start rotating the fan
                    fan.addClass('rotate');
                
                    interval = setInterval(function() {
                        timeLeft--;
                        currentAngle -= maxAngle / maxTime; // Adjust the decrement based on 255 degrees
                        knob.css('transform', `rotate(${Math.max(currentAngle, 0)}deg)`);
                        timerDisplay.val(`${timeLeft}s`);
                        if (timeLeft <= 0) {
                            clearInterval(interval);
                            endCountdown();
                        }
                    }, 1000);
                }
                
                
                  
                  function endCountdown() {
                      countdownRunning = false;
                      timerDuration = 0;
                      angle = 0;
                      timerDisplay.val(`${timerDuration}s`);
                      timerDisplay.prop('disabled', false); // Enable input after countdown
                      coin.draggable('enable');
                      knob.css('transform', 'rotate(0deg)');
                      knob.css('cursor', 'grabbing');
                      coin.css('cursor', 'grabbing');
                      $("#light").css("background-color", "red");
                      $("#nor-power-1").attr("src", "image/No(R).png");
                      $("#nor-power-2").attr("src", "image/No(R).png");
                      $("#nor-power-1T").text("No(R)");
                      $("#nor-power-2T").text("No(R)");
                  
                      // Stop rotating the fan
                      fan.removeClass('rotate');
                  
                      $(document).ready(function() {
                          const NR = $('#no-r-c');
                  
                          setTimeout(function() {
                              NR.attr('src', 'image/Nc(R).png');
                              textNR.text("Nc(R)");
                  
                              setTimeout(function() {
                                  NR.attr('src', 'image/No(R).png');
                                  textNR.text("No(R)");
                  
                              }, 2000); // Change back to 'image/No(R).png' after 2 seconds
                          }, 0);
                  
                          // Change NT image after countdown ends with a delay
                          const NT = $('#nc-t');
                          setTimeout(function() {
                              NT.attr('src', 'image/NC(T)O.jpg');
                              $("#nc-t-t").text("NO(T)");
                              timerDisplay.prop('disabled', true); // Disable input during countdown
                              coin.draggable('disable');
                              knob.css('cursor', 'not-allowed');
                              coin.css('cursor', 'not-allowed');
                              setTimeout(function() {
                                  NT.attr('src', 'image/NC(T)C.jpg');
                                  $("#nc-t-t").text("NC(T)");
                                  timerDisplay.prop('disabled', false); // Enable input after countdown
                                  coin.draggable('enable');
                                  knob.css('transform', 'rotate(0deg)');
                                  knob.css('cursor', 'grabbing');
                                  coin.css('cursor', 'grabbing');
                              }, 4000); // Change back to image3 after 4 seconds
                          }, 0); // Change immediately after countdown ends
                  
                      });
                  
                      rnor.attr('src', '#light').show();
                  }
                  
                  // Function to reset everything
                  function resetFunction() {
                      clearInterval(interval);
                      countdownRunning = false;
                      timerDuration = 0;
                      angle = 0;
                      timerDisplay.val(`${timerDuration}s`);
                      timerDisplay.prop('disabled', false); // Enable input after reset
                      coin.draggable('enable');
                      knob.css('transform', 'rotate(0deg)');
                      knob.css('cursor', 'grabbing');
                      coin.css('cursor', 'grabbing');
                      $("#light").css("background-color", "red");
                      $("#nor-power-1").attr("src", "image/No(R).png");
                      $("#nor-power-2").attr("src", "image/No(R).png");
                      $("#nor-power-1T").text("No(R)");
                      $("#nor-power-2T").text("No(R)");
                      fan.removeClass('rotate');
                  }
                  
                  // Event listeners for the switch images
                  $("#switch-c, #switch-p").on('click', function() {                             //it will bring countdown to zero
                      resetFunction();
                  });
                  
                  // Event listeners for the switch images to start the function again
                  $("#switch-c, #switch-p").on('click', function() {
                      resetFunction();
                  });
                  




                    // The provided code ends here
                } else {
                    $("#switch-p").attr("src", "images/s1.png");
                    Fanflag = false;

                    // Disable functionality: reset everything to default state
                    resetState();


                    
                    
                   

                }
            }
        });
    }


 
  


    function resetState() {

      $("#timero").css("opacity", 1);                   // images to be changed when switched 
      $("#knob").css("opacity", 0);
      $("#timer-display").css("opacity", 0);
      $("#timer").css("opacity", 0);
      $("#timero").css("opacity", 1);
      $("#no-r-c-o").css("opacity", 1);
      $("#nc-t-o").css("opacity", 1);
      $("#no-r-c").css("opacity", 0);
      $("#nc-t").css("opacity", 0);


                    let angle = 0;
                    let timerDuration = 0;
                    let interval;
                    let isDragging = false;
                    let countdownRunning = false;
                    const maxAngle = 0;
                    const maxTime = 0;

                    clearInterval(interval);

    
                    const knob = $('#knob');
                    const timerDisplay = $('#timer-display');
                    const coin = $('#coin');
                    const spnp = $('#pnp-sensor');
                    const rnor = $('#light');
                    const fan = $('#motor-fan');
                    const NR = $('#no-r-c');
                    const textNR = $('#no-r-t');


                    countdownCompleted = false; // Ensure countdownCompleted is reset

                    // Reset knob and timer display
                    knob.css('transform', 'rotate(0deg)');
                    timerDisplay.val(`${timerDuration}s`);
                    timerDisplay.prop('disabled', false);
                
                    // Disable draggable and reset cursor
                    
                 

                    knob.off('mousedown', function(e) {
                        if (!countdownRunning) {
                            isDragging = false;
                            $(document).off('mousemove', rotateKnob);
                            $(document).off('mouseup', stopDragging);
                        }
                    });

                    

                    function stopDragging() {
                        isDragging = false;
                        $(document).off('mousemove', rotateKnob);
                        $(document).off('mouseup', stopDragging);
                    }

                    
                    coin.draggable({
                        revert: false,
                        start: function(event, ui) {
                            if (countdownRunning || timerDuration <= 0) {
                                return false;
                            }
                        }
                    });

                
        
        // Resetting elements to default state
        knob.css('transform', 'rotate(0deg)');
        timerDisplay.val(`${timerDuration}s`);
        timerDisplay.prop('disabled', true); // Disable input during countdown
        coin.draggable('disable');
        knob.css('cursor', 'not-allowed');
        coin.css('cursor', 'not-allowed');
        $("#light").css("background-color", "red");
        $("#nor-power-1").attr("src", "image/No(R).png");
        $("#nor-power-2").attr("src", "image/No(R).png");
        $("#nor-power-1T").text("No(R)");
        $("#nor-power-2T").text("No(R)");
        NR.attr('src', 'image/No(R).png');
        textNR.text("No(R)");
        fan.removeClass('rotate');
        $("#pnp").attr("src", "image/PNP-OFF.jpg");
    }



    
function opacity0(list){
  list.forEach(function (dotId) {
    $(`#${dotId}`).css("opacity", "0");
  });
}
function opacity1(list){
  list.forEach(function (dotId) {
    $(`#${dotId}`).css("opacity", "1");
  });
}

function onPrint() {
  domtoimage.toPng(document.body)
    .then(function (dataUrl) {
      const a = document.createElement('a');
      a.setAttribute('download', 'imageName.png');
      a.setAttribute('href', dataUrl);
      a.click();
      // Notify the user that the image has been saved
      Swal.fire({
        title: 'Download Complete',
        text: "Print downloaded in your device's local storage 'Downloads'",
        icon: 'success',
        allowOutsideClick: false,
        target: '#main-box',
        customClass: {                      // <------ customClass is an object!
          container: 'position-absolute'
        }
      });
    })
    .catch(function (error) {
      console.error('Error capturing the image:', error);
      // Show error message
      Swal.fire({
        title: 'Error',
        text: 'There was an error saving your image.',
        icon: 'error',
        allowOutsideClick: false,
        target: '#main-box',
        customClass: {                      // <------ customClass is an object!
          container: 'position-absolute'
        }
      });
    });
}





function toggleSwitch(switchId) {
  if (switchId === 'red-but-1') {
      stateA = !stateA;
      // $("#switchD").attr("src","images/Lamp on.png")
      // $("#red-but-1").attr("src","images/green but3.png")
      $("#nor-1").attr("src","images/Nc(R).png")
      $("#ncr-2").attr("src","images/No(R).png")
      $("#nor-power-1").attr("src","images/Nc(R)  rotate left.png")
      $("#nor-power-3").attr("src","images/Nc(R)  rotate left.png")
      const image = document.getElementById('motor-inside');
      image.classList.add('rotating');
      image.classList.remove('rotatingopp');
      console.log("A press")
      if (stateA) {
          stateC = false;
      }
  } else if (switchId === 'red-but-2') {
      stateC = !stateC;
      // $("#red-but-2").attr("src","images/green but3.png")
      $("#nor-2").attr("src","images/Nc(R).png")
      $("#ncr-1").attr("src","images/No(R).png")
      $("#nor-power-2").attr("src","images/Nc(R)  rotate left.png")
      $("#nor-power-4").attr("src","images/Nc(R)  rotate left.png")
      console.log("C press")
      const image = document.getElementById('motor-inside');
      image.classList.remove('rotating');
      image.classList.add('rotatingopp');
      if (stateC) {
          stateA = false;
      }
  } else if (switchId === 'green-but') {
      stateB = !stateB;
      console.log("B press")
      const image = document.getElementById('motor-inside');
      image.classList.remove('rotating');
      image.classList.remove('rotatingopp');

      $("#nor-1").attr("src","images/No(R).png")
      $("#ncr-2").attr("src","images/Nc(R).png")
      $("#nor-power-1").attr("src","images/No(R) rotate.png")
      $("#nor-power-3").attr("src","images/No(R) rotate.png")

      $("#nor-2").attr("src","images/No(R).png")
      $("#ncr-1").attr("src","images/Nc(R).png")
      $("#nor-power-2").attr("src","images/No(R) rotate.png")
      $("#nor-power-4").attr("src","images/No(R) rotate.png")

      if (stateB) {
          console.log("A off")
          // $("#switchD").attr("src","images/lamp off.jpg")

          stateA = false;
          stateC = false;
          stateB = false;
      }
  }

  updateSwitches();
}

function way(cks) {
  if (cks) {
    performHoverAcLoad()
  }
}

function powerResetBtn() {
  $("#powerReset").click(() => {
    if (!b) {
      var endpointsToDelete = ["nor-power-1","nor-power-2","nor-power-1U","switch-p","nor-power-2U","nor-power-1D","nor-power-2D","motor-bg","base","motor-fan","mu","md","dc-power","switch-p","dc-pu","dc-pd"]
  
      let len=instance.getAllConnections();

      for(i=0;i<2;i++){
        instance.getAllConnections().forEach(function (connection) {
          console.log(connection.sourceId, connection.targetId); // Add this line
          if (
            endpointsToDelete.includes(connection.sourceId) ||
            endpointsToDelete.includes(connection.targetId)
          ) {
            console.log("Deleting:", connection.sourceId, connection.targetId); // And this line
            instance.deleteConnection(connection);
          }
        });
      }
    } else {
      way(b);               //  way is commented
    }
  });
}


function alertFunction(txt,iconName) {
  swal.fire({
    icon: iconName,
    title: txt,
    allowOutsideClick: false,
    target: '#main-box',
    customClass: {                      // <------ customClass is an object!
      container: 'position-absolute'
    }
  });
}

function endpointFunction(list, color,size,maxConnectionsValue) {
  list.forEach(function (dotId) {
    endpoints[dotId] = instance.addEndpoint(
      dotId,
      {
        endpoint: [ "Dot", {radius: size}],
        anchor: "Center",
        isSource: true,
        isTarget: true,
        maxConnections: maxConnectionsValue,
        isDetachable:false
      },
      color
    );
     endpoints[dotId].canvas.style.display = 'none';
  });
}

function checkPower() {
  let len = connections.getConnections();
  let cnt = 0;
  if (len.length < 10) {
    txt = "make connections first";
    alertFunction(txt,"warning");
    powerResetBtn();
    return false;
  }
  else if (len.length < 13) {
    txt = "Improper Connections ";
    alertFunction(txt,"warning");
    powerResetBtn();
    return false;
  }

  for (i = 0; i < len.length; i++) {
    let a = len[i].sourceId,
      b = len[i].targetId;
    if((a=="dc-pu"        && b=="nor-power-1U" ) || (b=="dc-pu"   && a=="nor-power-1U" )){cnt+=1}     
    else if((a=="nor-power-1D"   && b=="mu" ) || (b=="nor-power-1D"   && a=="mu" )){cnt+=1}
    else if((a=="md"  && b=="nor-power-2D" ) || (b=="md"  && a=="nor-power-2D" )){cnt+=1}
    else if((a=="nor-power-2U"  && b=="dc-pd" ) || (b=="nor-power-2U"  && a=="dc-pd" )){cnt+=1}
    }

  if (cnt == 4) {
    opacity1(['comp1','comp2', 'comp3', 'comp4', 'comp8' , 'comp6', 'comp10'])

    $("#powerVerify").off("click");
    txt = "Right Connections";
    alertFunction(txt,"success");
    ck = true;
    for(i=0;i<len.length;i++){
      if (len[i].isDetachable()) {
        len[i].setDetachable(false);
      }
    }
    return true;
  } else {
    txt = "Wrong Connections";
    alertFunction(txt,"error");
    powerResetBtn();
    return false;
  }
}

function checkControl() {
  let len = connections.getConnections();
  let cnt = 0;

  if (len.length < 1) {
    txt = "make connections first";
    alertFunction(txt,"warning");
    controlResetBtn();
    return false;
  }
  else if (len.length < 9) {
    txt = "Improper Connections ";
    alertFunction(txt,"warning");
    controlResetBtn();
    return false;
  }

  for (i = 0; i < len.length; i++) {
    let ab = len[i].sourceId,
    ba = len[i].targetId;

    if((ab=="dc-c-u"      && ba=="no-r-u"    ) || (ba=="dc-c-u" && ab=="no-r-u")     ){cnt+=1}
    else if((ab=="no-r-u"   && ba=="pnpu") || (ba=="no-r-u"   && ab=="pnpu")     ){cnt+=1}
    else if((ab=="no-r-d"   && ba=="nc-t-u") || (ba=="no-r-d"   && ab=="nc-t-u")     ){cnt+=1}
    else if((ab=="pnps"   && ba=="nc-t-u") || (ba=="pnps"   && ab=="nc-t-u")         ){cnt+=1}
    else if((ab=="nc-t-u"       && ba=="timer-u") || (ba=="nc-t-u"   && ab=="timer-u")         ){cnt+=1}
    else if((ab=="nc-t-d"       && ba=="relay-u") || (ba=="nc-t-d"   && ab=="relay-u")       ){cnt+=1}
    else if((ab=="pnpd"     && ba=="timer-d") || (ba=="pnpd"   && ab=="timer-d")      ){cnt+=1}
    else if((ab=="timer-d"      && ba=="relay-d") || (ba=="timer-d"   && ab=="relay-d")        ){cnt+=1}
    else if((ab=="relay-d"        && ba=="dc-c-d") || (ba=="relay-d"   && ab=="dc-c-d")        ){cnt+=1}
  }

  if (cnt == 9) {
    opacity1(['comp1','comp2', 'comp3', 'comp4', 'comp8' , 'comp6', 'comp10'])

    $("#controlVerify").off("click");
    txt = "Right Connections ";
    alertFunction(txt,"success");
    powerResetBtn()
    powerVerifyBtn();
    for(i=0;i<len.length;i++){
      if (len[i].isDetachable()) {
        len[i].setDetachable(false);
      }
    }

    $("#cc").css("cursor","not-allowed");
    $("#pc").css("cursor","pointer");
    $("#pc").css("opacity", "1");
    $("#pc").hover(()=>{
      $("#pc").css("box-shadow", "5px 5px 20px 5px #000000")
      $("#pc").css("background-color", "#eca10c");
    },()=>{
      $("#pc").css("background-image"," linear-gradient(to bottom, #ca673d, #f8ab5e")
      $("#pc").css("box-shadow", "")
    })

    $("#pc").click(() => {

      opacity1(['component17',"component6-b", 'comp2',"comp16"])
      opacity0(['comp1', 'comp12', "comp13","comp14","comp15"])

      
      $('#comp2').click(()=>
        {
          $("#nor-power-1").attr("src", "image/No(R).png");
          $("#nor-power-2").attr("src", "image/No(R).png");
          $("#nor-power-1T").text("NO(R1)")
          $("#nor-power-2T").text("NO(R1)")
          opacity1(["nor-power-1","nor-power-2"]);
          endpoints["nor-power-1U"].canvas.style.display = '';
          endpoints["nor-power-2U"].canvas.style.display = '';
          endpoints["nor-power-1D"].canvas.style.display = '';
          endpoints["nor-power-2D"].canvas.style.display = '';
          
        }
      );
      $('#comp17').click(()=>
        {
          $("#motor-bg").attr("src", "image/motor(bg1).png");
          $("#motor-fan").attr("src", "image/motor(fan).png");
          $("#mt").text("Fan (DC Motor)")
          opacity1(["motor-fan","motor-bg","base"]);
          endpoints["mu"].canvas.style.display = '';
          endpoints["md"].canvas.style.display = '';
        }
      );

      $('#comp16').click(()=>
        {
          $("#dc-power").attr("src", "images/supply f23.png");
          $("#switch-p").attr("src", "images/s1.png");
          $("#dc-pt").text("DC Supply")
          opacity1(["dc-power","switch-p"]);
          endpoints["dc-pu"].canvas.style.display = '';
          endpoints["dc-pd"].canvas.style.display = '';
        }
      );

  });


    return true;
  } else {
    txt = "Wrong Connections ";
    alertFunction(txt,"error");
    controlResetBtn();
    return false;
  }
}

function controlVerifyBtn() {
  $("#controlVerify").click(() => {
    a = checkControl();
  });
}

function powerVerifyBtn() {
  $("#powerVerify").click(() => {
    b = checkPower();
    if (!b) {
      powerResetBtn();
    } else {
      console.log(b)
      way(b);
    }
  });
}

function controlResetBtn() {
  $("#controlReset").click(() => {
    if (!a) {
      connections.deleteEveryConnection();
    }
  });
}

function closeBtn() {
  $("#close").click(() => {
    $(".alert").css("top", "-100%");
  });
}

function jsStart() {
  jsPlumb.ready(function () {
    instance = jsPlumb.getInstance();
    connections = instance;

var control_ls=["relay" , "relay-u", "relay-d" ,"light", "no-r-c","no-r-c-o","no-r-u","no-r-d","timer","timer-u","timer-d", "timero",
  "nc-t","nc-t-u","nc-t-d","nc-t-o","pnp-sensor","pnp", "pnpu","pnpd","pnps","dc-control","switch-c","dc-c-u",,"dc-c-d","coinStand","coin", "knob","timer-display"]
var power_ls=["nor-power-1","nor-power-2","nor-power-1U","switch-p","nor-power-2U","nor-power-1D","nor-power-2D","motor-bg","base","motor-fan","mu","md","dc-power","switch-p","dc-pu","dc-pd"]

 opacity0(control_ls)
 opacity0(power_ls)



      endpointFunction(["no-r-u"], red,"6",2)                 //control circuit endpoints(red)          
      endpointFunction(["nc-t-u"], red,"6",3)
      endpointFunction(["pnpu"], red,"8",1)
      endpointFunction(["timer-u"], red,"6",2)
      endpointFunction(["relay-u"], red,"8",1)
      endpointFunction(["dc-c-u"], red,"8",1)

      endpointFunction(["nor-power-1U"], red,"6",1)            //power circuit endpoints(red)
      endpointFunction(["nor-power-2U"], red,"6",1)
      endpointFunction(["dc-pu"], red,"8",1)
      endpointFunction(["mu"], red,"6",1)





      endpointFunction(["no-r-d"], black,"6",1)                          //control circuit endpoints(blue)   
      endpointFunction(["timer-d"], black,"6",2)
      endpointFunction(["nc-t-d"], black,"6",1)
      endpointFunction(["pnpd"], black,"8",1)
      endpointFunction(["relay-d"], black,"8",2)
      endpointFunction(["dc-c-d"], black,"8",1)

      endpointFunction(["nor-power-1D"], black,"6",1)                          //power circuit endpoints(blue))
      endpointFunction(["nor-power-2D"], black,"6",1) 
      endpointFunction(["dc-pd"], black,"8",1) 
      endpointFunction(["md"], black,"6",1) 



      endpointFunction(["pnps"], green,"8",1)                               //control circuit endpoint(green)   

                                                                      

    $("#cc").click(() => {
      opacity0(['component17',"component6-b"])
      opacity1(['comp1', 'comp2', 'comp12','comp13','comp14','comp15','comp16',])


      
      $('#comp1').click(()=>
        {
          $("#relay").attr("src", "images/relay img.png");
          $("#relay-t").text("Relay")
          opacity1(["relay","light"])  //img id
          endpoints["relay-u"].canvas.style.display = '';
          endpoints["relay-d"].canvas.style.display = '';
        }
      );

      $('#comp2').click(()=>
        {
          $("#no-r-c").attr("src", "image/No(R).png");
          $("#no-r-t").text("NO(R)")
          opacity1(["no-r-c"])  //img id
          endpoints["no-r-u"].canvas.style.display = '';
          endpoints["no-r-d"].canvas.style.display = '';
        }
      );

      $('#comp12').click(()=>
        {
          $("#timer").attr("src", "image/timer(edit).jpg");
          $("#timero").attr("src", "image/timero.png");
          $("knob").attr("src", "image/blackKnob.png");
          $("#timer-t").text("Timer")
          opacity1(["timer","knob","knob","timero"])  //img id
          endpoints["timer-u"].canvas.style.display = '';
          endpoints["timer-d"].canvas.style.display = '';
        }
      );

      $('#comp13').click(()=>
        {
          $("#nc-t").attr("src", "image/NC(T)C.jpg");
          $("#nc-t-t").text("NC(T)")
          opacity1(["nc-t"])  //img id
          endpoints["nc-t-u"].canvas.style.display = '';
          endpoints["nc-t-d"].canvas.style.display = '';
        }
      );

      $('#comp14').click(()=>
        {
          $("#pnp").attr("src", "image/PNP-OFF.jpg");
          $("#pnp-sensor").attr("src", "image/PSP(sensorButton).png");
          $("#pnpt").text("PNP proximity sensor")
          opacity1(["pnp","pnp-sensor"])  //img id
          endpoints["pnpu"].canvas.style.display = '';
          endpoints["pnpd"].canvas.style.display = '';
          endpoints["pnps"].canvas.style.display = '';

        }
      );

      $('#comp16').click(()=>
        {
          $("#dc-control").attr("src", "images/supply f23.png");
          $("#switch-c").attr("src", "images/s1.png");
          $("#dc-c-t").text("DC Supply")
          opacity1(["switch-c","dc-control"])  //img id
          endpoints["dc-c-u"].canvas.style.display = '';
          endpoints["dc-c-d"].canvas.style.display = '';
        }
      );

      $('#comp15').click(()=>
        {
          $("#coin").attr("src", "image/coin.png");
          $("#coinStand").attr("src", "image/coinStand (2).png");
          $("#coint").text("Coin (Metal Object)")
          opacity1(["coin","coinStand"])  //img id
          
        }
      );

      
 
    });
  });
    controlVerifyBtn();
    controlResetBtn();
    closeBtn();
    $("#print").click(()=>{
      onPrint()
    })
}

jsStart();




let ins = true;
$("#instruct").click(() => {
  if (ins) {
    $(".instruction").css("top", "16%");
    ins = false;
  } else {
    $(".instruction").css("top", "-100%");
    ins = true;
  }
});
$(".instruction button").click(() => {
  $(".instruction").css("top", "-100%");
  ins = true;
});
$("#Reset").click(() => {
  location.reload(true);
});

// $('#comp2').mouseover(()=>
//   {
//     $('#component2').attr("src","  image/Nc_R_-removebg-preview (2).png ")
//     $('#component2-nor').text("Nc (R)")
//   }
// ).mouseout(()=>{
// $('#component2').attr("src","image/No_R_-removebg-preview (2).png")
// $('#component2-nor').text("No(R)")
// })

// $('#comp13').mouseover(()=>   
// {
//   $('#component13').attr("src","image/NC_T_C-removebg-preview.png   ")
//   $('#component13-not').text("NC(T)")
// }
// ).mouseout(()=>{
// $('#component13').attr("src","image/NC_T_O-removebg-preview.png")
// $('#component13-not').text("NO(T)")
// })






// // Mouseover and mouseout events for component 4 (comp4)
// $('#comp4').mouseover(() => {
// $('#component4').attr("src", "images/green but3.png");
// $('#component4-po').text("NO(PB)-Close");
// }).mouseout(() => {
// $('#component4').attr("src", "images/red but4.png");
// $('#component4-po').text("NO(PB)-Open");
// });

// // Mouseover and mouseout events for component 11 (comp11)
// $('#comp11').mouseover(() => {
// $('#component11').attr("src", "images/red but4.png");
// $('#component11-po').text("NC(PB)-Open");
// }).mouseout(() => {
// $('#component11').attr("src", "images/green but3.png");
// $('#component11-po').text("NC(PB)-Close");
// });