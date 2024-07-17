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

var newcolor={
  paintStyle: { fill: "#FF0080"},
  connectorStyle: { stroke: "#FF0080", strokeWidth: 2 }
}
var red = {
  paintStyle: { fill: "rgb(255, 0, 0)"},
  connectorStyle: { stroke: "rgb(255, 0, 0)", strokeWidth: 2 }
};
var black = {
  paintStyle: { fill: "rgb( 0, 0,255)"},
  connectorStyle: { stroke: "rgb( 0, 0,255)", strokeWidth: 2 }
};
var green = {
  paintStyle: { fill: "rgb( 0,255,0)"},
  connectorStyle: { stroke: "rgb( 0,255,0)", strokeWidth: 2 }
};
var purple = {
  paintStyle: { fill: "rgb( 180, 0,255)"},
  connectorStyle: { stroke: "rgb( 180, 0,255)", strokeWidth: 2 }
};
var orange = {
  paintStyle: { fill: "rgb(210, 80, 25)"},
  connectorStyle: { stroke: "rgb(210, 80, 25)", strokeWidth: 2 }
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



function but1fun(){
  var sw1 = $("#but1")
  sw1.attr('src', 'images/green but3.png');
  $("#but2").attr('src', 'images/red but4.png');
  $("#press").attr('src',"images/gp.png")
  fanImage.classList.add('rotating');
}
function but2fun(){
  var sw1 = $("#but2")
  sw1.attr('src', 'images/green but3.png');
  $("#but1").attr('src', 'images/green but3.png');
  $("#but2").attr('src', 'images/red but4.png');
  $("#press").attr('src',"images/rp.png")
  fanImage.classList.remove('rotating');
}
function thunderfun(){
  swal.fire({
    text: "We have detected an overload current, causing the MCB to trip. To ensure safety, please turn off the power supply and restart the power supply.",
    title: "Overload Current Detected",
    icon: "error",
    allowOutsideClick: false
  });
  $("#mcb").attr('src', 'images/MCB_Off.png');
  $("#press").attr('src',"images/yp.png")
  $("#but2").attr('src', 'images/red but4.png');
  $("#but1").attr('src', 'images/green but3.png');
  fanImage.classList.remove('rotating');
  $("#but1").off("click",but1fun)
  $("#but2").off("click",but2fun)
}

function performHoverAcLoad(){
  $("#ndc").css("cursor","pointer");
  $("#nac").css("cursor","pointer");

$("#ndc").click(() => {
  $("#press").attr('src',"images/rp.png")
  if(!FanOn){
      $("#ndc").attr("src", "images/s2.png");
      $("#controlnac").attr("src", "images/s2.png");
      FanOn = true;
      Fanflag=false;
      Fanmove=true;
      $("#but2").attr('src', 'images/red but4.png');
      $("#but1").attr('src', 'images/green but3.png');
      fanImage.classList.remove('rotating');
      $("#but1").off("click",but1fun)
      $("#but2").off("click",but2fun)
      $('#plcled').css("background-color", "#00ff00")
      $("#thunder").off("click",thunderfun)

  }
  else{
      $("#ndc").attr("src", "images/s1.png");
      $("#controlnac").attr("src", "images/s1.png");
      $("#nac").attr("src", "images/s1.png");
      FanOn = false;
      Fanflag=true
      Fanmove=false;
      $("#but2").attr('src', 'images/red but4.png');
      $("#but1").attr('src', 'images/green but3.png');
      fanImage.classList.remove('rotating');
      $("#but1").off("click",but1fun)
      $("#but2").off("click",but2fun)
      $('#plcled').css("background-color", "#ff0000")
      $("#thunder").off("click",thunderfun)
    }
});

$("#nac").click(() => {
  $('#plcled').css("background-color", "#00ff00")
  if(Fanmove){
      if (!Fanflag) {
        $("#ndc").css("cursor","pointer");
        $("#mcb").attr('src', 'images/MCB_ON.png');
        $(".onButton").css("cursor","pointer");
        $("#nac").attr("src", "images/s2.png");
        $("#ndc").attr("src", "images/s2.png");
        Fanflag = true;
        isFanOn = false;
        $("#but1").on("click",but1fun)
        $("#but2").on("click",but2fun)
        $("#thunder").on("click",thunderfun)
  } else {
      $("#nac").attr("src", "images/s1.png");
      Fanflag = false;
      $("#press").attr('src',"images/rp.png")
      $("#mcb").attr('src', 'images/MCB_Off.png');
      $("#but2").attr('src', 'images/red but4.png');
      $("#but1").attr('src', 'images/green but3.png');
      fanImage.classList.remove('rotating');
      $("#but1").off("click",but1fun)
      $("#but2").off("click",but2fun)
      $("#thunder").off("click",thunderfun)
  }
  }
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
      var endpointsToDelete = ["lr","lb","lg","mur","mub","mug","mdr","mdb","mdg","jur","jub","jug","jdr","jdb","jdg","br","bb","bg"];
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
    //   way(b);                 way is commented
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
        connector: ["Bezier", { curviness :45 }],
        isDetachable:false,
      },
      color
    );
    endpoints[dotId].canvas.style.display = 'none';
  });
}

function checkPower() {
  let len = connections.getConnections();
  let cnt = 0;
  if (len.length < 19) {
    txt = "make connections first";
    alertFunction(txt,"warning");
    powerResetBtn();
    return false;
  }
  else if (len.length < 27) {
    txt = "Improper Connections ";
    alertFunction(txt,"warning");
    powerResetBtn();
    return false;
  }

  var ls = ["dcu","dcd","redu","redd","ru","rd","acu","acd","nu","nd","bu","bd"];
  for (i = 0; i < len.length; i++) {
    let a = len[i].sourceId,
      b = len[i].targetId;
      if((a=="lr"  && b=="mur") || (b=="lr"  && a=="mur") ){cnt+=1}
      else if((a=="mdr" && b=="jur") || (b=="mdr" && a=="jur") ){cnt+=1}
      else if((a=="jdr" && b=="br")  || (b=="jdr" && a=="br")  ){cnt+=1}
      else if((a=="jdb" && b=="bb")  || (b=="jdb" && a=="bb")  ){cnt+=1}
      else if((a=="jdg" && b=="bg")  || (b=="jdg" && a=="bg")  ){cnt+=1}
      else if((a=="mdb" && b=="jub") || (b=="mdb" && a=="jub") ){cnt+=1}
      else if((a=="mdg" && b=="jug") || (b=="mdg" && a=="jug") ){cnt+=1}
      else if((a=="lb"  && b=="mub") || (b=="lb"  && a=="mub") ){cnt+=1}
      else if((a=="lg"  && b=="mug") || (b=="lg"  && a=="mug") ){cnt+=1}
  }

  if (cnt == 9) {
    opacity1([ 'comp4' ,'comp12', 'comp11', 'comp8'])

    $("#powerVerify").off("click")
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

      opacity0([ 'comp4' ,'comp12', 'comp11', 'comp8'])
      opacity1(['comp6','comp9','comp13', 'combo', 'comp2','comp1'])

      $('#comp6').click(()=>{
        opacity1(["rotatingImage","bulbtext","fan-border","bulbimg"])
        endpoints["br"].canvas.style.display = '';
        endpoints["bb"].canvas.style.display = '';
        endpoints["bg"].canvas.style.display = '';
      });
      $('#combo').click(()=>{
        opacity1(["comb","combtext"])
        endpoints["jur"].canvas.style.display = '';
        endpoints["jub"].canvas.style.display = '';
        endpoints["jug"].canvas.style.display = '';
        endpoints["jdr"].canvas.style.display = '';
        endpoints["jdb"].canvas.style.display = '';
        endpoints["jdg"].canvas.style.display = '';
      });
      $('#comp9').click(()=>{
        opacity1(["power-supply","nac","powtext"])
          endpoints["lr"].canvas.style.display = '';
          endpoints["lb"].canvas.style.display = '';
          endpoints["lg"].canvas.style.display = '';
      });
      $('#comp13').click(()=>{
        opacity1(["mcb","mcbbox","mcbtext"])
        endpoints["mur"].canvas.style.display = '';
        endpoints["mub"].canvas.style.display = '';
        endpoints["mug"].canvas.style.display = '';
        endpoints["mdr"].canvas.style.display = '';
        endpoints["mdb"].canvas.style.display = '';
        endpoints["mdg"].canvas.style.display = '';
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
  else if (len.length < 18) {
    txt = "Improper Connections ";
    alertFunction(txt,"warning");
    controlResetBtn();
    return false;
  }

  for (i = 0; i < len.length; i++) {
    let ab = len[i].sourceId,
      ba = len[i].targetId;
      console.log(ab,ba)

      if((ab=="powu" && ba=="lplc"   ) || (ba=="powu" && ab=="lplc"   )){cnt+=1}
      else if((ab=="dcu"    && ba=="redu"  ) || (ba=="dcu"    && ab=="redu"  )){cnt+=1}
      else if((ab=="negPlc" && ba=="dcd"   ) || (ba=="negPlc" && ab=="dcd"   )){cnt+=1}
      else if((ab=="dcd"    && ba=="but1d" ) || (ba=="dcd"    && ab=="but1d" )){cnt+=1}
      else if((ab=="but1u"  && ba=="x0"    ) || (ba=="but1u"  && ab=="x0"    )){cnt+=1}
      else if((ab=="x1"     && ba=="but2u" ) || (ba=="x1"     && ab=="but2u" )){cnt+=1}
      else if((ab=="but2d"  && ba=="dcd"   ) || (ba=="but2d"  && ab=="dcd"   )){cnt+=1}
      else if((ab=="x2"     && ba=="but3d" ) || (ba=="x2"     && ab=="but3d" )){cnt+=1}
      else if((ab=="but3u"  && ba=="powu"    ) || (ba=="but3u"  && ab=="powu"    )){cnt+=1}
      else if((ab=="pu3"    && ba=="y3"    ) || (ba=="pu3"    && ab=="y3"    )){cnt+=1}
      else if((ab=="y2"     && ba=="pu2"   ) || (ba=="y2"     && ab=="pu2"   )){cnt+=1}
      else if((ab=="y1"     && ba=="pu1"   ) || (ba=="y1"     && ab=="pu1"   )){cnt+=1}
      else if((ab=="pd1"    && ba=="nplc") || (ba=="pd1"    && ab=="nplc")){cnt+=1}
      else if((ab=="nplc" && ba=="pd2"   ) || (ba=="nplc" && ab=="pd2"   )){cnt+=1}
      else if((ab=="pd3"    && ba=="nplc") || (ba=="pd3"    && ab=="nplc")){cnt+=1}
      else if((ab=="nplc" && ba=="powd"    ) || (ba=="nplc" && ab=="powd"    )){cnt+=1}
      else if((ab=="ru"     && ba=="redd"  ) || (ba=="ru"     && ab=="redd"  )){cnt+=1}
  }

  if (cnt == 17) {
    opacity1(['comp6','comp9','comp13'])

    $("#controlVerify").off("click")
    txt = "Right Connections ";
    alertFunction(txt,"success");
    powerResetBtn()
    powerVerifyBtn();
    for(i=0;i<len.length;i++){
      if (len[i].isDetachable()) {
        len[i].setDetachable(false);
      }
    }

    plcStart()
    $("#red").css("cursor","pointer");
        $("#red").on("click",()=>{
          Swal.fire({
            title: 'Loading...',
            text: 'Please wait while we PLC program is loading.',
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
    // endpointFunction(["lr","lb","lg","mur","mub","mug","mdr","mdb","mdg","jur","jub","jug","jdr","jdb","jdg","br","bb","bg"],red,"8",1)

    $("#cc").click(() => {
      var ls = ["redu","lr","mur","mdr","jur","jdr","br","but3u"];
      // endpointFunction(["br"], red,"4",1)
      endpointFunction(["dcu"], red,"6",1)
      endpointFunction(["lplc"], red,"6",1)
      endpointFunction(["dcd"], black,"6",3)
      endpointFunction(["nplc"], black,"6",5)
      endpointFunction(["lb","mub","mdb","jub","jdb",'powd'], black,"6",1)
      endpointFunction(["bb"], black,"6",1)
      endpointFunction(["rd"], black,"6",1)
      endpointFunction(["ru","redd"], newcolor,"6",1)
      endpointFunction(["negPlc"], black,"6",1)
      
      endpointFunction(["pd1","pd2","pd3"], black,"6",1)
  
      endpointFunction(ls, red,"6",1);
      endpointFunction(["powu"], red,"6",2);
      endpointFunction(["x0","y3","pu3","lg","mug","mdg","jug","jdg","bg"], green,"6",1);
      endpointFunction(["bg"], green,"6",1);
      endpointFunction(["x1","y1","pu1"], orange,"6",1);
      endpointFunction(["y2","pu2","but3d","x2"], purple,"6",1);
      // endpointFunction(["x3"], black,"8",1);

        opacity1(['comp1', 'comp4', 'comp2', 'comp12', 'comp11', 'comp8','comp9'])
        opacity0(['comp6','comp13'])

        

        $('#comp11').click(()=>
        {
          opacity1(["but1","but2","but1text","but2text","butbox"])
          endpointFunction(["but1u"], green,"6",1)
          endpointFunction(["but2u"], orange,"6",1)
          endpointFunction(["but1d","but2d"], black,"6",1)

          endpoints["but1u"].canvas.style.display = '';
          endpoints["but1d"].canvas.style.display = '';
          endpoints["but2u"].canvas.style.display = '';
          endpoints["but2d"].canvas.style.display = '';
        }
      );
      $('#comp9').click(()=>
        {
          opacity1(["controlnac","control-supply","plstext"])
          endpoints["powu"].canvas.style.display = '';
          endpoints["powd"].canvas.style.display = '';
        }
      );
      $('#comp1').click(()=>
        {
          opacity1(["or","ortext","thunder"])
          endpoints["but3u"].canvas.style.display = '';
          endpoints["but3d"].canvas.style.display = '';
        }
      );
      $('#comp2').click(()=>
        {
          opacity1(["relay","relaytext"])
          endpoints["ru"].canvas.style.display = '';
          endpoints["rd"].canvas.style.display = '';
        }
      );
      $('#comp4').click(()=>
        {
          opacity1(["red","redtext","plcled","merge1","merge2","merge3"])
          endpoints["redu"].canvas.style.display = '';
          endpoints["redd"].canvas.style.display = '';
          endpoints["negPlc"].canvas.style.display = '';
          endpoints["nplc"].canvas.style.display = '';
          endpoints["x0"].canvas.style.display = '';
          endpoints["x1"].canvas.style.display = '';
          endpoints["x2"].canvas.style.display = '';
          // endpoints["x3"].canvas.style.display = '';
          endpoints["y3"].canvas.style.display = '';
          endpoints["y1"].canvas.style.display = '';
          endpoints["y2"].canvas.style.display = '';
          endpoints["lplc"].canvas.style.display = '';
        }
      );
      $('#comp12').click(()=>
        {
          opacity1(["press","presstext"])
          endpoints["pu1"].canvas.style.display = '';
          endpoints["pu2"].canvas.style.display = '';
          endpoints["pu3"].canvas.style.display = '';
          endpoints["pd3"].canvas.style.display = '';
          endpoints["pd1"].canvas.style.display = '';
          endpoints["pd2"].canvas.style.display = '';
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

let results={}
let deleteImgTrue=false;
let ab="a",bc="b",ac="c";
const validButtonIds = ['a1', 'a2', 'a3', 'a4', 'b1', 'b4', 'c1', 'c4', 'd1', 'd4'];
const validButtonIdsExcepta4 = ['a1', 'a2', 'a3'];
const output = {
  'a1':ab,
  'a2':bc,
  'a3':bc,
  'a4':ac,
  'b1':ab,
  'b4':ac,
  'c1':bc,
  'c4':ac,
  'd1':ab,
  'd4':ac,
};

function deleteImg(){
  if(!deleteImgTrue){
          validButtonIds.forEach((tid)=>{
          $('#' + tid + ' img').attr("src","images/black.png")
          $('#' + tid).css("background-color","black")
          $('#' + tid + ' img').css("display","none")
      })
  }

}

function handleButtonClick(buttonId) {
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
  }).then((result) => {
      if (result.isConfirmed) {
          if(result.value=="a" || result.value=="b" || result.value=="c"||result.value=="A" || result.value=="B" || result.value=="C"){
              let userInput = result.value;
              results[buttonId] = userInput.toLowerCase();
              // console.log('User Input:', userInput);
              // console.log('Results:', results);

              $('#' + buttonId + ' img').css("display","inline")
              $('#' + buttonId).css("background-color","transparent")

              if(result.value.toLowerCase()=="a"){
                  $('#' + buttonId + ' img').attr('src', 'images/no contact.png');
              }else if(result.value.toLowerCase()=="b"){
                  $('#' + buttonId + ' img').attr('src', 'images/nc contact.png');
              }else if(result.value.toLowerCase()=="c"){
                  $('#' + buttonId + ' img').attr('src', 'images/coil.png');
              }
          }else{
              let userInput = result.value;
              Swal.fire({
                  text: 'You have enter wrong value',
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
      } else if (result.dismiss === Swal.DismissReason.cancel) {
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
              timer: 1500,
              allowOutsideClick: false
          });
      }
  });
}

function plcStart(){
    results = {};
    deleteImgTrue=false;

    validButtonIds.forEach((tid)=>{
      $(`#${tid}`).on("click",()=>{
          handleButtonClick(tid)
      })
    })
    function startSimulation(){
      $("#check-hello").off('click')
      $("#start-hello").off('click')
      $("#a2 img").attr("src",'images/nc on.png')
      $("#a3 img").attr("src",'images/nc on.png')
      $("#c4 img").attr("src",'images/coil on.png')
      $("#c1 img").attr("src",'images/nc on.png')
      $("#a1").on('click',()=>{
        if($("#b1 img").attr("src")!='images/no on.png'){
          $("#a2 img").attr("src",'images/nc on.png')
          $("#a3 img").attr("src",'images/nc on.png')
          $("#a1 img").attr("src",'images/no on.png')
          $("#b1 img").attr("src",'images/no on.png')
  
          $("#a4 img").attr("src",'images/coil on.png')
          $("#b4 img").attr("src",'images/coil on.png')
          $("#c4 img").attr("src",'images/coil.png')
          $("#c1 img").attr("src",'images/nc contact.png')
        }else{
          if($("#a1 img").attr("src")=='images/no on.png'){
            $("#a1 img").attr("src",'images/no contact.png')
          }else{
            $("#a1 img").attr("src",'images/no on.png')
          }
        }
      })
      $("#d1").on("click",()=>{
        if($("#a2 img").attr("src")!='images/nc contact.png'){
          if($("#d1 img").attr("src")!='images/no on.png'){
            $("#d1 img").attr("src",'images/no on.png')
            $("#d4 img").attr("src",'images/coil on.png')
            $("#c4 img").attr("src",'images/coil on.png')
            $("#c1 img").attr("src",'images/nc on.png')
            $("#a3 img").attr("src",'images/nc contact.png')
            $("#a4 img").attr("src",'images/coil.png')
            $("#b4 img").attr("src",'images/coil.png')
          }else{
            $("#d1 img").attr("src",'images/no contact.png')
            $("#d4 img").attr("src",'images/coil.png')
            $("#c4 img").attr("src",'images/coil.png')
            $("#c1 img").attr("src",'images/nc contact.png')
            $("#a3 img").attr("src",'images/nc on.png')
            $("#a4 img").attr("src",'images/coil on.png')
            $("#b4 img").attr("src",'images/coil on.png')
          }
        }
      })
      $("#a3").on("click",()=>{
        if($("#a2 img").attr("src")!='images/nc contact.png'){
          if($("#a3 img").attr("src")!='images/nc on.png'){
            $("#d1 img").attr("src",'images/no contact.png')
            $("#d4 img").attr("src",'images/coil.png')
            $("#c4 img").attr("src",'images/coil.png')
            $("#c1 img").attr("src",'images/nc contact.png')
            $("#a3 img").attr("src",'images/nc on.png')
            $("#a4 img").attr("src",'images/coil on.png')
            $("#b4 img").attr("src",'images/coil on.png')
          }else{
            $("#d1 img").attr("src",'images/no on.png')
            $("#d4 img").attr("src",'images/coil on.png')
            $("#c4 img").attr("src",'images/coil on.png')
            $("#c1 img").attr("src",'images/nc on.png')
            $("#a3 img").attr("src",'images/nc contact.png')
            $("#a4 img").attr("src",'images/coil.png')
            $("#b4 img").attr("src",'images/coil.png')
          }
        }
      })
      $("#a2").on("click",()=>{
        $("#a1 img").attr("src",'images/no contact.png')
        $("#a3 img").attr("src",'images/nc on.png')
        $("#a2 img").attr("src",'images/nc contact.png')
        $("#a4 img").attr("src",'images/coil.png')
        $("#c4 img").attr("src",'images/coil.png')
        $("#c1 img").attr("src",'images/nc contact.png')
        $("#b4 img").attr("src",'images/coil.png')
        $("#b1 img").attr("src",'images/no contact.png')
        $("#d4 img").attr("src",'images/coil.png')
        $("#d1 img").attr("src",'images/no contact.png')

      })
    }

    $("#check-hello").on('click',()=>{
      let len= Object.keys(results).length
      let cnt=0,txt="";
      if(len<10){
          txt = "Improper Connections ";
          alertFunction(txt,"warning");

      }else{
          for (let key in output) {
              // Check if obj2 has the same key and value
              if (results.hasOwnProperty(key) && output[key] === results[key]) {
                cnt+=1;
              }
          }
          if(cnt==10){
              txt = "Right Connections";
              alertFunction(txt,"success");
              validButtonIds.forEach((tid)=>{
                $(`#${tid}`).off("click")
              })
              deleteImgTrue=true
              $("#start-hello").on('click',startSimulation)
              startPower()
          }else{
            deleteImgTrue=false
              txt = "Wrong Connections";
            alertFunction(txt,"error");
          }
      }
    })

    $("#delete-hello").on("click",deleteImg)
}