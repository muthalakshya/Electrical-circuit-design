var connections;
var endpoints = {};
var instance;

let ck = false;
let a = false;
let b = false;
let acSlider = true;
let FanOn = false;
let Fanflag=false;
let Fanmove=false;
let moveStart = false;
let iscontinue = false;
let isFanOn = false;

const switches = document.querySelectorAll('.onButton');
const fanImage = document.getElementById('rotatingImage');

var red = {
  paintStyle: { fill: "red"},
};
var black = {
  paintStyle: { fill: "blue"},
};
var green = {
  paintStyle: { fill: "green"},
};

var orange = {
  paintStyle: { fill: "orange"},
};

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





function roll() {
  isFanOn = !isFanOn;
  if (isFanOn) {
      $('#nor').attr('src', 'images/Nc(R)  rotate left.png');
      $("#nortext").text("Nc (R)");
      $('#light').css("background-color", "#00ff00");
      fanImage.classList.add('rotating');
  } else {
      $('#nor').attr('src', 'images/No(R) rotate.png');
      $("#nortext").text("No (R)");
      $('#light').css("background-color", "#ff0000");
      fanImage.classList.remove('rotating');
  }
}

function s1roll(sid) {
  let sw1 = $(`#${sid}`);
  if (sw1.attr('src') === 'images/green but3.png') {
      sw1.attr('src', 'images/red but4.png');
  } else {
      sw1.attr('src', 'images/green but3.png');
  }

  checkButtonsAndImages();
}

function checkButtonsAndImages() {
  if ($("#nac").attr('src') === 'images/s2.png' && $("#ndc").attr('src') === 'images/s2.png' &&
      ($("#but1").attr('src') === 'images/green but3.png' || $("#but2").attr('src') === 'images/green but3.png')) {
      $('#nor').attr('src', 'images/Nc(R)  rotate left.png');
      $("#nortext").text("Nc (R)");
      $('#light').css("background-color", "#00ff00");
      fanImage.classList.add('rotating');
  } else {
      $('#nor').attr('src', 'images/No(R) rotate.png');
      $("#nortext").text("No (R)");
      $('#light').css("background-color", "#ff0000");
      fanImage.classList.remove('rotating');
  }
}

function performHoverAcLoad() {
  $("#ndc").css("cursor", "pointer");
  $("#nac").css("cursor", "pointer");

  $("#ndc").click(() => {
      $('#plcled').css("background-color", "#ff0000");
      if (!FanOn) {
          $("#ndc").attr("src", "images/s2.png");
          FanOn = true;
          Fanflag = false;
          Fanmove = true;
          $("#but1").off('click');
          $("#but2").off('click');
          $("#but1").attr('src', 'images/red but4.png');
          $("#but2").attr('src', 'images/red but4.png');
          isFanOn = false;
      } else {
          $("#ndc").attr("src", "images/s1.png");
          $("#nac").attr("src", "images/s1.png");
          FanOn = false;
          Fanflag = true;
          Fanmove = false;
          $('#nor').attr('src', 'images/No(R) rotate.png');
          $("#but1").attr('src', 'images/red but4.png');
          $("#but2").attr('src', 'images/red but4.png');
          $('#light').css("background-color", "#ff0000");
          fanImage.classList.remove('rotating');
          iscontinue = !iscontinue;
          $("#but1").off('click');
          $("#but2").off('click');
          $("#but1").attr('src', 'images/red but4.png');
          $("#but2").attr('src', 'images/red but4.png');
          isFanOn = false;
      }
      checkButtonsAndImages();
  });

  $("#nac").click(() => {
      $('#plcled').css("background-color", "#00ff00");
      if (Fanmove) {
          if (!Fanflag) {
              $(".onButton").css("cursor", "pointer");
              $("#nac").attr("src", "images/s2.png");
              $("#ndc").attr("src", "images/s2.png");
              Fanflag = true;
              isFanOn = false;
              $("#but1").on("click", () => {
                  s1roll("but1");
              });
              $("#but2").on("click", () => {
                  s1roll("but2");
              });
          } else {
              $("#nac").attr("src", "images/s1.png");
              Fanflag = false;
              $('#nor').attr('src', 'images/No(R) rotate.png');
              $("#but1").attr('src', 'images/red but4.png');
              $("#but2").attr('src', 'images/red but4.png');
              $('#light').css("background-color", "#ff0000");
              fanImage.classList.remove('rotating');
              iscontinue = !iscontinue;
              $("#but1").off('click');
              $("#but2").off('click');
              $("#but1").attr('src', 'images/red but4.png');
              $("#but2").attr('src', 'images/red but4.png');
              isFanOn = false;
          }
      }
      checkButtonsAndImages();
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
      var endpointsToDelete = ["acu", "nd","bd","acd", "nu", "bu"];
      let len=instance.getAllConnections();

      for(i=0;i<2;i++){
        instance.getAllConnections().forEach(function (connection) {
          if (
            endpointsToDelete.includes(connection.sourceId) ||
            endpointsToDelete.includes(connection.targetId)
          ) {
            instance.deleteConnection(connection);
          }
        });
      }
    } else {
    way(b);                
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
        connector: ["Bezier", { curviness:45 }],
        isDetachable:false,
        connectorStyle: { stroke: "#2245FC", strokeWidth: 2 }
      },
      color
    );
    endpoints[dotId].canvas.style.display = 'none';
  });
}

function checkPower() {
  let len = connections.getConnections();
  let cnt = 0;
  if (len.length < 9) {
    txt = "make connections first";
    alertFunction(txt,"warning");
    powerResetBtn();
    return false;
  }
  else if (len.length < 11) {
    txt = "Improper Connections ";
    alertFunction(txt,"warning");
    powerResetBtn();
    return false;
  }

  var ls = ["dcu","dcd","redu","redd","ru","rd","acu","acd","nu","nd","bu","bd"];
  for (i = 0; i < len.length; i++) {
    let a = len[i].sourceId,
      b = len[i].targetId;
    if ((a == "acu" && b == "nu") || (b == "acu" && a == "nu")) {
      cnt += 1;
    } else if ((a == "nd" && b == "bu") || (b == "nd" && a == "bu")) {
      cnt += 1;
    } else if ((a == "bd" && b == "acd") || (b == "bd" && a == "acd")) {
      cnt += 1;
    }
  }

  if (cnt == 3) {
    ['comp1', 'comp4', 'comp8' , 'comp2', 'comp6','comp11'].forEach(function (id) {
      let component = document.getElementById(id);
      component.style.opacity = '1';
    });
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
function startPower(){
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

      ['comp1', 'comp4','comp11'].forEach(function (id) {
        let component = document.getElementById(id);
        component.style.opacity = '0.1';
      });

      ['comp2', 'comp6', 'comp8'].forEach(function (id) {
        document.getElementById(id).style.opacity = '1';
      })

      endpointFunction(["nu"], red,"6",1);
      endpointFunction(["nd"], black,"6",1)
      endpointFunction(["acu"], red,"6",1);
      endpointFunction(["acd"], black,"6",1)
      endpointFunction(["bd"], black,"4",1)
      endpointFunction(["bu"], red,"4",1);

      

      $('#comp6').click(()=>{
        opacity1(["rotatingImage","bulbtext","fan-outer","fan-border"])
        // $("#rotatingImage").attr("src","images/fan1.png")
        // $("#bulbtext").text("Fan")
        $(".bulbimg").css("opacity", "1");
        $(".bulbimg").css("opacity","1")
        endpoints["bu"].canvas.style.display = '';
        endpoints["bd"].canvas.style.display = '';
      });
      $('#comp2').click(()=>{
        opacity1(["nor","nortext","nordowntext","nu","nd"])
        $(".pressNor").css("opacity","1")
        endpoints["nu"].canvas.style.display = '';
        endpoints["nd"].canvas.style.display = '';
      });
      $('#comp8').click(()=>{
        opacity1(["ac","nac","actext"])
          endpoints["acu"].canvas.style.display = '';
          endpoints["acd"].canvas.style.display = '';
      });

        });

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
  else if (len.length < 8) {
    txt = "Improper Connections ";
    alertFunction(txt,"warning");
    controlResetBtn();
    return false;
  }

  for (i = 0; i < len.length; i++) {
    let ab = len[i].sourceId,
      ba = len[i].targetId;

    if ((ab == "dcu" && ba == "redu") || (ba == "dcu" && ab == "redu")) {
      cnt += 1;
    } else if ((ab == "redd" && ba == "rd") || (ba == "redd" && ab == "rd")) {
      cnt += 1;
    }else if ((ab == "negPlc" && ba == "dcd") || (ba == "negPlc" && ab == "dcd")) {
      cnt += 1;
    } else if ((ab == "ru" && ba == "dcd") || (ba == "ru" && ab == "dcd")) {
      cnt += 1;
    }else if((ab=="but1d" && ba=="dcd"  ) || (ba=="but1d" && ab=="dcd"  )){cnt+=1}
    else if((ab=="but2d" && ba=="dcd"  ) || (ba=="but2d" && ab=="dcd"  )){cnt+=1}
  
    else if((ab=="but1u" && ba=="x0"   ) || (ba=="but1u" && ab=="x0"   )){cnt+=1}
    else if((ab=="but2u" && ba=="x1"   ) || (ba=="but2u" && ab=="x1"   )){cnt+=1}

  }

  if (cnt == 8) {
    ['comp1', 'comp4', 'comp8' , 'comp2', 'comp6'].forEach(function (id) {
      let component = document.getElementById(id);
      component.style.opacity = '1';
    });
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

    plcStart2()
    $("#red").css("cursor","pointer");
        $("#red").on("click",()=>{
          Swal.fire({
            title: 'Loading...',
            text: 'Please wait while the PLC program is loading.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
          });
          setTimeout(function() {
            // Close the loading alert
            Swal.close();

            $(".plc-close-hello").css("cursor","pointer");
            $(".main-hello").css("display","inline")

            $(".plc-close-hello").click(()=>{
                $(".main-hello").css("display","none")
                $(".main-inner").css("display","flex")
                $(".custom-endpoint-zindex").css("z-index","-1")
            })
        }, 500);


        })


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
      way(b,false,false,false);
    }
  });
}

function controlResetBtn() {
  $("#controlReset").click(() => {
    if (!a) {
      connections.deleteEveryConnection();
      $(".alert").css("top", "-100%");
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
    $("#cc").click(() => {
      var ls = ["redu",  "rd","redd"];
      var x_ls = ["x0","x1"]
      endpointFunction(["dcu","but1u","but2u"], red,"6",1)
      endpointFunction(["dcd"], black,"6",4)
      endpointFunction(["but1d","but2d","ru"], black,"6",1)
      endpointFunction(["negPlc"], black,"6",1)
      endpointFunction(ls, red,"6",1);
      endpointFunction(["x0"], green,"6",1);
      endpointFunction(["x1"], orange,"6",1);
      


        // Show only required components
        ['comp1', 'comp4', 'comp8'].forEach(function (id) {
            let component = document.getElementById(id);
            component.style.opacity = '1';
        });
        // Hide other components
        ['comp2','comp6'].forEach(function (id) {
            document.getElementById(id).style.opacity = '0.1';

        });

        

        $('#comp11').click(()=>
        {
          opacity1(["but1","but2","but1text","but2text"])
          endpoints["but1u"].canvas.style.display = '';
          endpoints["but1d"].canvas.style.display = '';
          endpoints["but2u"].canvas.style.display = '';
          endpoints["but2d"].canvas.style.display = '';
         
        }
      );
      $('#comp1').click(()=>
        {
          opacity1(["relaytext","relay","light"])
          endpoints["ru"].canvas.style.display = '';
          endpoints["rd"].canvas.style.display = '';
        }
      );
      $('#comp4').click(()=>
        {
          opacity1(["red","redtext","plcled"])
          endpoints["redu"].canvas.style.display = '';
          endpoints["redd"].canvas.style.display = '';
          endpoints["negPlc"].canvas.style.display = '';
         
          endpoints["x0"].canvas.style.display = '';
          endpoints["x1"].canvas.style.display = '';
       
        }
      );
      $('#comp8').click(()=>
        {
          opacity1(["dctext","dc","ndc"])
          endpoints["dcu"].canvas.style.display = '';
          endpoints["dcd"].canvas.style.display = '';
        }
      );

    });
  });
    controlVerifyBtn();
    controlResetBtn();
    closeBtn();
    $(".bar-print").on('click',()=>{
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
      $('#component2').attr("src","images/Nc(R)  rotate left.png")
      $('#component2-nor').text("Nc (R)")
    }
).mouseout(()=>{
  $('#component2').attr("src","images/No(R) rotate.png")
  $('#component2-nor').text("No (R)")
})


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

let inst = true;
$(".instructions-hello").click(() => {
    if (inst) {
        $(".instruction-hello-inner").css("top", "20%");
        inst = false;
    } else {
        $(".instruction-hello-inner").css("top", "-100%");
        inst = true;
    }
});
$(".instruction-hello-inner button").click(() => {
    $(".instruction-hello-inner").css("top", "-100%");
    inst = true;
});

let results2 = {};
let deleteImgTrue2 = false;
let ab2 = "a", bc2 = "b", ac2 = "c";
const validButtonIds2 = ['b1', 'b2', 'b4'];
const validButtonIdsExceptb42 = ['b1', 'b2'];
const output2 = {
    'b1': ab2,
    'b2': ab2,
    'b4': ac2,
};

function deleteImg2() {
    if (!deleteImgTrue2) {
        validButtonIds2.forEach((tid2) => {
            $('#' + tid2 + ' img').attr("src", "images/black.png")
            $('#' + tid2).css("background-color", "black")
            $('#' + tid2 + ' img').css("display", "none")
        })
    }
}

function handleButtonClick2(buttonId2) {
    Swal.fire({
        text: `Enter the name of the symbol?`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Add it!',
        input: 'text',
        inputPlaceholder: 'Enter here',
        customClass: {
            popup: 'custom-swal-popup',
            content: 'custom-swal-content',
            title: 'custom-swal-title',
            actions: 'custom-swal-actions',
            input: 'custom-swal-input'
        },
        position: 'center',
        allowOutsideClick: false
    }).then((result2) => {
        if (result2.isConfirmed) {
            if (result2.value == "a" || result2.value == "b" || result2.value == "c" || result2.value == "A" || result2.value == "B" || result2.value == "C") {
                let userInput2 = result2.value;
                results2[buttonId2] = userInput2.toLowerCase();

                $('#' + buttonId2 + ' img').css("display", "inline")
                $('#' + buttonId2).css("background-color", "transparent")

                if (result2.value.toLowerCase() == "a") {
                    $('#' + buttonId2 + ' img').attr('src', 'images/no contact.png');
                } else if (result2.value.toLowerCase() == "b") {
                    $('#' + buttonId2 + ' img').attr('src', 'images/nc contact.png');
                } else if (result2.value.toLowerCase() == "c") {
                    $('#' + buttonId2 + ' img').attr('src', 'images/coil.png');
                }
            } else {
                let userInput2 = result2.value;
                Swal.fire({
                    text: 'You have entered the wrong value',
                    icon: 'error',
                    customClass: {
                        popup: 'custom-swal-popup',
                        content: 'custom-swal-content',
                        title: 'custom-swal-title',
                        actions: 'custom-swal-actions',
                        input: 'custom-swal-input'
                    },
                    position: 'center',
                    showConfirmButton: false,
                    timer: 1500,
                    allowOutsideClick: false
                });
            }
        } else if (result2.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                text: 'Cancelled',
                icon: 'error',
                customClass: {
                    popup: 'custom-swal-popup',
                    content: 'custom-swal-content',
                    title: 'custom-swal-title',
                    actions: 'custom-swal-actions',
                    input: 'custom-swal-input'
                },
                position: 'center',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
}

function plcStart2() {
    results2 = {};
    deleteImgTrue2 = false;

    validButtonIds2.forEach((tid2) => {
        $(`#${tid2}`).on("click", () => {
            handleButtonClick2(tid2)
        })
    })

    function startSimulation2() {
        $("#start-hello-2").off('click');

        validButtonIdsExceptb42.forEach((tid2) => {
            if ($('#' + tid2 + ' img').attr("src") == 'images/nc contact.png') {
                $('#' + tid2 + ' img').attr('src', 'images/nc on.png');
            }
        });

        $('.clickable2').on('click', function () {
            let clickedId2 = $(this).attr('id');
            let columnIndex2 = clickedId2.charAt(1); // Get column index from id
            // Toggle the NOT operation for the entire column
            for (let row2 of ['b']) {
                let cell2 = $('#' + row2 + columnIndex2 + " img");
                let currentText2 = cell2.attr("alt");
                let newText2 = (currentText2 === 'TRUE') ? 'FALSE' : 'TRUE';
                cell2.attr("alt", newText2);

                if (newText2 == "TRUE") {
                    if (cell2.attr("src") == 'images/no contact.png') {
                        cell2.attr('src', 'images/no on.png');
                    } else {
                        cell2.attr('src', 'images/nc on.png');
                    }
                } else {
                    if (cell2.attr("src") == 'images/no on.png') {
                        cell2.attr('src', 'images/no contact.png');
                    } else {
                        cell2.attr('src', 'images/nc contact.png');
                    }
                }
            }

            // Check if either b1 or b22 is TRUE
            let b1True2 = $('#b1 img').attr("alt") === 'TRUE';
            let b2True2 = $('#b2 img').attr("alt") === 'TRUE';
            let anyTrueB2 = b1True2 || b2True2;

            // Display the result in the div for b42
            $('#b4').attr("alt", anyTrueB2 ? 'TRUE' : 'FALSE');

            if ($('#b4').attr("alt") == "TRUE") {
                $('#b4 img').attr('src', 'images/coil on.png');
            } else {
                $('#b4 img').attr('src', 'images/coil.png');
            }
        });
    }

    $("#check-hello-2").on('click', () => {
        let len2 = Object.keys(results2).length
        let cnt2 = 0, txt2 = "";
        if (len2 < 3) {
            txt2 = "Improper Connections ";
            alertFunction(txt2, "warning");

        } else {
            for (let key2 in output2) {
                // Check if obj2 has the same key and value
                if (results2.hasOwnProperty(key2) && output2[key2] === results2[key2]) {
                    cnt2 += 1;
                }
            }
            if (cnt2 == 3) {
              $("#check-hello-2").off("click");
                txt2 = "Right Connections";
                alertFunction(txt2, "success");
                validButtonIds2.forEach((tid2) => {
                    $(`#${tid2}`).off("click")
                })
                deleteImgTrue2 = true
                startPower()
                $("#start-hello-2").on('click', startSimulation2)
            } else {
                deleteImgTrue2 = false
                txt2 = "Wrong Connections";
                alertFunction(txt2, "error");
            }
        }
    })

    $("#delete-hello-2").on("click", deleteImg2)
}

document.getElementById('backButton').addEventListener('click', function() {
  Swal.fire({
      title: 'It will take you back to Logic gates main window , will reset this page',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      preConfirm: () => {
          window.location.href = 'index.html';
      },
      allowOutsideClick: false,
      target: '#main-box',
      customClass: {                      // <------ customClass is an object!
        container: 'position-absolute'
      },
  });
});