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
  connectorStyle: { stroke: "#2245FC", strokeWidth: 4 },
  connectorHoverStyle: { stroke: "rgb(0, 255, 0)", strokeWidth: 8 }
};
var black = {
  paintStyle: { fill: "blue"},
  //connector: ["Straight", { stub: 5 }],
  connector: ["Bezier", { curviness: 40  }],
  connectorStyle: { stroke: "#2245FC", strokeWidth: 4 },
  connectorHoverStyle: { stroke: "rgb(0, 255, 0)", strokeWidth: 8 }
};

var green = {
  paintStyle: { fill: "green"},
  connector: ["Bezier", { curviness:70 }],
  connectorStyle: { stroke: "#2245FC", strokeWidth: 4 },
  connectorHoverStyle: { stroke: "rgb(0, 255, 0)", strokeWidth: 2 }
};

$('#resetButton').attr('disabled', 'disabled');


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

                resetState();
            }
        });

        
      $("#switch-p").click(() => {
          if (Fanmove) {
              if (!Fanflag) {
                 $("#switch-c").attr("src", "images/s2.png");
                 $("#switch-p").attr("src", "images/s2.png");
            
            Fanflag = true;

          
                 
                $(document).ready(function() {
                  function reset() {
                      $('#actualCount').val('00').css('background-color', 'grey');
                      if ($('#setCount').val() !== $('#actualCount').val()) {
                          $('#setCount').css('background-color', 'grey');
                          $('#actualCount').css('background-color', 'lightcoral');
                          $('#motor-fan').addClass('rotating');
                          $('#nc-t').attr('src', 'image/Nc(R).png');
                          $("#nc-t-t").text("NC(C)");
                          $('#timer').attr('src', 'image/counter.png');
                          coin.css('cursor', 'grabbing');

                          $('#coin').draggable({
                              revert: true
                          });
                          $('#resetButton').removeAttr('disabled'); // Enable reset button
                      } else {
                          $('#resetButton').attr('disabled', 'disabled'); // Disable reset button
                      }
                  }
              
                  function checkResetButton() {
                      if ($('#setCount').val() === $('#actualCount').val() && $('#setCount').val() === '00') {
                          $('#resetButton').attr('disabled', 'disabled'); // Disable reset button
                      } else {
                          $('#resetButton').removeAttr('disabled'); // Enable reset button
                      }
                  }
              
                  function initialState() {
                      $('#setCount').val('00').removeAttr('disabled').css('background-color', 'lightgreen');
                      $('#actualCount').val('00').attr('disabled', 'disabled').css('background-color', 'grey');
                      $('#motor-fan').removeClass('rotating');
                      $('#nc-t').attr('src', 'image/Nc(R).png');
                      $("#nc-t-t").text("NC(C)");
                      $('#timer').attr('src', 'image/counter.png');
                      $('#coin').draggable('destroy');
                      
                      $('#resetButton').attr('disabled', 'disabled');
                  }
              
                  // Set initial background colors
                  $('#setCount').css('background-color', 'lightgreen');
                  $('#actualCount').css('background-color', 'grey');
              
                  // Initial alert on page load
                  Swal.fire({
                      title: 'Welcome!',
                      text: 'Enter a value in Set_Count box between 1-99.',
                      icon: 'info',
                      confirmButtonText: 'OK'
                  }).then(() => {
                      $('#setCount').focus(); 
                  });
              
                  $('#setCount').on('input', function() {
                      var value = $(this).val();
                    
                      value = value.replace(/\D/g, '').slice(-2); 
                      if (value.length === 1 && value !== '0') {
                          value = '0' + value;
                      }
                      $(this).val(value);
              
                      // Check validity immediately
                      if (value ===  value < '01' || value > '99') {
                          Swal.fire({
                              title: 'Invalid Input',
                              text: 'Please enter a valid value between 01 and 99',
                              icon: 'error',
                              confirmButtonText: 'OK'
                          }).then(() => {
                              $('#setCount').val('00').focus();
                          });
                      } else {
                          // Enable the reset button if setCount value is valid
                          reset();
                      }
                  }).on('blur', function() {
                      var setValue = $(this).val();
                      if (setValue !== '00' && setValue >= '01' && setValue <= '99') {
                          $(this).attr('disabled', 'disabled').css('background-color', 'grey');
                          $('#actualCount').css('background-color', 'lightcoral');
                          $('#motor-fan').addClass('rotating');
                          $('#nc-t').attr('src', 'image/Nc(R).png');
                          $("#nc-t-t").text("NC(C)");
                          $('#timer').attr('src', 'image/counter.png');
                          
                          $('#coin').draggable({
                              revert: true
                          });
                          checkResetButton(); // Update reset button state
                      } else {
                          Swal.fire({
                              title: 'Invalid Input',
                              text: 'Please enter a valid value between 01 and 99',
                              icon: 'error',
                              confirmButtonText: 'OK'
                          }).then(() => {
                              $('#setCount').val('00').focus();
                              $('#setCount').css('background-color', 'lightgreen');
                              $('#actualCount').css('background-color', 'grey');
                              $('#motor-fan').removeClass('rotating');
                              $('#nc-t').attr('src', 'image/Nc(R).png');
                              $("#nc-t-t").text("NC(C)");
                              $('#timer').attr('src', 'image/counter.png');
                              $('#coin').draggable('destroy');
                          });
                      }
                  });
              
                  $('#pnp-sensor').droppable({
                      over: function(event, ui) {
                          $('#pnp').attr('src', 'image/PNP-ON.jpg'); // Change LED image when coin is over pnp
                      },
                      out: function(event, ui) {
                          $('#pnp').attr('src', 'image/PNP-OFF.jpg'); // Revert LED image when coin is not over pnp
                      },
                      drop: function(event, ui) {
                          var actualCount = parseInt($('#actualCount').val(), 10) + 1;
                          var setCount = parseInt($('#setCount').val(), 10);
                          if (actualCount <= setCount) {
                              $('#actualCount').val(actualCount < 10 ? '0' + actualCount : actualCount);
                              checkResetButton(); // Update reset button state
                              if (actualCount === setCount) {
                                  $('#coin').draggable('disable');
                                  $('#motor-fan').removeClass('rotating');
                                  $('#nc-t').attr('src', 'image/No(R).png');
                                  $("#nc-t-t").text("NO(C)");
                                  $('#timer').attr('src', 'image/counter-on.png');
                                  $('#actualCount').css('background-color', 'grey');
                                  $('#resetButton').attr('disabled', 'disabled'); // Disable reset button
                              } else if (actualCount === setCount - 1) {
                                  Swal.fire({
                                      title: 'Almost There!',
                                      text: "Click on Counter's Reset button if you want to reset Actual_Count to '00'",
                                      icon: 'info',
                                      confirmButtonText: 'OK'
                                  });
                              }
                          }
                      }
                  });
              
                  $('#resetButton').on('click', function() {
                      $('#actualCount').val('00').css('background-color', 'lightcoral');
                      $('#motor-fan').addClass('rotating');
                      $('#nc-t').attr('src', 'image/Nc(R).png');
                      $("#nc-t-t").text("NC(C)");
                      $('#timer').attr('src', 'image/counter.png');
                      $('#coin').draggable({
                          revert: true
                      });
                      checkResetButton(); // Update reset button state
                  });
              
                  $('#coin').on('dragstop', function() {
                      $('#pnp').attr('src', 'image/PNP-OFF.jpg'); // Revert LED image when dragging stops
                  });
              
                  // Add click handlers for S1 and S2
                  $('#S1, #S2').on('click', function() {
                      initialState();
                  });
              
                  // Initialize everything to the initial state
                  initialState();
              });
              

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

      $('#setCount').val('00').attr('disabled', 'disabled').css('background-color', 'grey');
      $('#actualCount').val('00').attr('disabled', 'disabled').css('background-color', 'grey');
    
      $('#motor-fan').removeClass('rotating');
      $('#nc-t').attr('src', 'image/No(R).png');
      $("#nc-t-t").text("NO(C)");
      $('#timer').attr('src', 'image/counter.png');
      $('#coin').draggable('destroy');
      $('#resetButton').attr('disabled', 'disabled');

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
          console.log(connection.sourceId, connection.targetId); 
          if (
            endpointsToDelete.includes(connection.sourceId) ||
            endpointsToDelete.includes(connection.targetId)
          ) {
            console.log("Deleting:", connection.sourceId, connection.targetId); 
            instance.deleteConnection(connection);
          }
        });
      }
    } else {
      way(b);            
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
  if (len.length < 6) {
    txt = "make connections first";
    alertFunction(txt,"warning");
    powerResetBtn();
    return false;
  }
  else if (len.length < 8) {
    txt = "Incomplete Connections ";
    alertFunction(txt,"warning");
    powerResetBtn();
    return false;
  }

  for (i = 0; i < len.length; i++) {
    let a = len[i].sourceId,
      b = len[i].targetId;
    if((a=="dc-pu"        && b=="nc-t-u" ) || (b=="dc-pu"   && a=="nc-t-u" )){cnt+=1}     
    else if((a=="nc-t-d"   && b=="mu" ) || (b=="nc-t-d"   && a=="mu" )){cnt+=1}
    else if((a=="md"  && b=="dc-pd" ) || (b=="md"  && a=="dc-pd" )){cnt+=1}
   
    }

  if (cnt == 3) {
    opacity1([ 'comp12', 'comp14', 'comp15' , 'comp26'])
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
  else if (len.length < 5) {
    txt = "Incomplete Connections ";
    alertFunction(txt,"warning");
    controlResetBtn();
    return false;
  }

  for (i = 0; i < len.length; i++) {
    let ab = len[i].sourceId,
    ba = len[i].targetId;

    if((ab=="ac-c-u"      && ba=="timer-u"    ) || (ba=="ac-c-u" && ab=="timer-u")     ){cnt+=1}
    else if((ab=="timer-d"   && ba=="ac-c-d") || (ba=="timer-d"   && ab=="ac-c-d")     ){cnt+=1}
    else if((ab=="pnpu"   && ba=="timer-p") || (ba=="pnpu"   && ab=="timer-p")     ){cnt+=1}
    else if((ab=="pnps"   && ba=="timer-s") || (ba=="pnps"   && ab=="timer-s")         ){cnt+=1}
    else if((ab=="pnpd"       && ba=="timer-n") || (ba=="pnpd"   && ab=="timer-n")         ){cnt+=1}
  
   }

  if (cnt == 5) {
    opacity1([ 'comp13', 'comp17', 'comp16'])

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

      opacity1(["comp17","comp16", "comp13"])
      opacity0([ "comp12","comp14","comp15","comp26"])

      
      $('#comp13').click(()=>
        {
          $("#nc-t").attr("src", "image/No(R).png");
         
          $("#nc-t-t").text("NO(C)")
          
          opacity1(["nc-t","nc-t-t"]);
          endpoints["nc-t-u"].canvas.style.display = '';
          endpoints["nc-t-d"].canvas.style.display = '';
          
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

var control_ls=["light","no-r-c-o","timer","timer-u","timer-d","timer-p","timer-s","timer-n", "counter",
  ,"pnp-sensor","pnp", "pnpu","pnpd","pnps","ac-c-t", "ac-control","switch-c","ac-c-u","ac-c-d","coinStand","coin"]
var power_ls=["switch-p","motor-bg","base","motor-fan","mu","md","dc-power","switch-p","dc-pu","dc-pd","nc-t","nc-t-u","nc-t-d","nc-t-t"]

opacity0(control_ls)
opacity0(power_ls)



                                                                  
      endpointFunction(["nc-t-u"], red,"8",3)                   //control circuit endpoints(red) 
      endpointFunction(["pnpu"], red,"8",1)
      endpointFunction(["timer-u"], red,"8",2)
     endpointFunction(["ac-c-u"], red,"8",1)
      endpointFunction(["timer-p"], red,"8",2)
                                                       
      
      endpointFunction(["dc-pu"], red,"8",1)                 //power circuit endpoints(red)
      endpointFunction(["mu"], red,"6",1)

                                                           
      endpointFunction(["timer-d"], black,"8",2)             //control circuit endpoints(blue)
      endpointFunction(["nc-t-d"], black,"8",1)
      endpointFunction(["pnpd"], black,"8",1)
      endpointFunction(["ac-c-d"], black,"8",1)
      endpointFunction(["timer-n"], black,"8",2)
      endpointFunction(["dc-pd"], black,"8",1) 
      endpointFunction(["md"], black,"6",1) 



      endpointFunction(["pnps"], green,"8",1)                               //control circuit endpoint(green)   
      endpointFunction(["timer-s"], green,"8",1)
                                                                      

    $("#cc").click(() => {
      opacity0(['comp17','comp13' , "comp16"])
      opacity1([ "comp12","comp14","comp15","comp26"])


      $('#comp12').click(()=>
        {
          $("#timer").attr("src", "image/counter.png");
          
          $("#timer-t").text("Counter")
          opacity1(["timer" , "counter" ])  //img id
          endpoints["timer-u"].canvas.style.display = '';
          endpoints["timer-d"].canvas.style.display = '';
          endpoints["timer-p"].canvas.style.display = '';
          endpoints["timer-s"].canvas.style.display = '';
          endpoints["timer-n"].canvas.style.display = '';

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

      $('#comp26').click(()=>
        {
          $("#ac-control").attr("src", "image/AC-supply.png");
          $("#switch-c").attr("src", "images/s1.png");
          $("#ac-c-t").text("AC Supply")
          opacity1(["switch-c","ac-control","ac-c-t"])  //img id
          endpoints["ac-c-u"].canvas.style.display = '';
          endpoints["ac-c-d"].canvas.style.display = '';
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

$('#comp2').mouseover(()=>
  {
    $('#component2').attr("src","  image/Nc_R_-removebg-preview (2).png ")
    $('#component2-nor').text("Nc (R)")
  }
).mouseout(()=>{
$('#component2').attr("src","image/No_R_-removebg-preview (2).png")
$('#component2-nor').text("No(R)")
})

$('#comp13').mouseover(()=>   
{
  $('#component13').attr("src"," image/Nc_R_-removebg-preview (2).png  ")
  $('#component13-not').text("NC(C)")
}
).mouseout(()=>{
$('#component13').attr("src","image/No_R_-removebg-preview (2).png")
$('#component13-not').text("NO(C)")
})



$('#comp4').mouseover(() => {
$('#component4').attr("src", "images/green but3.png");
$('#component4-po').text("NO(PB)-Close");
}).mouseout(() => {
$('#component4').attr("src", "images/red but4.png");
$('#component4-po').text("NO(PB)-Open");
});


$('#comp11').mouseover(() => {
$('#component11').attr("src", "images/red but4.png");
$('#component11-po').text("NC(PB)-Open");
}).mouseout(() => {
$('#component11').attr("src", "images/green but3.png");
$('#component11-po').text("NC(PB)-Close");
});