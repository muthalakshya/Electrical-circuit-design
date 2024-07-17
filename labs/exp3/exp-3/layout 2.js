var connections;
var endpoints = {};
var instance;

let ck = false;
let a = false;
let b = false;
let stateA = false;
let stateB = false;
let stateC = false;

var red = {
  paintStyle: { fill: "red"},
  connector: ["Bezier", { curviness: 45  }],
  // connector: ["Straight", { stub: 5 }],
  connectorStyle: { stroke: "#2245FC", strokeWidth: 2 },
  connectorHoverStyle: { stroke: "rgb(0, 255, 0)", strokeWidth: 2 }
};
var black = {
  paintStyle: { fill: "blue"},
  // connector: ["Straight", { stub: 5 }],
  connector: ["Bezier", { curviness: 45  }],
  connectorStyle: { stroke: "#2245FC", strokeWidth: 2 },
  connectorHoverStyle: { stroke: "rgb(0, 255, 0)", strokeWidth: 2 }
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




function updateSwitches() {
  let switchA = document.getElementById('red-but-1');
  let switchB = document.getElementById('green-but');
  let switchC = document.getElementById('red-but-2');

  switchA.src = stateA ? "images/green but3.png" : "images/red but4.png";
  switchB.src = stateB ? "images/green but3.png" : "images/green but3.png";
  switchC.src = stateC ? "images/green but3.png" : "images/red but4.png";
}

function HandleOn(){
  $("#red-but-1").attr("src", "images/green but3.png");
$("#red2-text").text("NC (PB2)")
$("#nor-1").attr("src","images/Nc(R).png")
$("#no1-text").text("NC (R2)")
$("#ncr-2").attr("src","images/No(R).png")
$("#nc2-text").text("NO (R2)")
$("#nor-power-2").attr("src","images/Nc(R)  rotate left.png")
$("#np2-text").text("NC (R2)")
$("#nor-power-4").attr("src","images/Nc(R)  rotate left.png")
$("#np4-text").text("NC (R2)")
$("#light-1").css("background-color","rgb(0, 255, 0)")
const image = document.getElementById('motor-inside');
image.classList.add('rotating');
$("#motor-inside").attr("src", "images/Forward-motor.png");
$("#formotor").attr("src", "images/forbox.png");
image.classList.remove('rotatingopp');
}
function R2on(){
  $("#red-but-2").attr("src", "images/green but3.png");
$("#red1-text").text("NC (PB1)")
$("#nor-2").attr("src","images/Nc(R).png")
$("#no2-text").text("NC (R1)")
$("#ncr-1").attr("src","images/No(R).png")
$("#nc1-text").text("NO (R1)")
$("#nor-power-1").attr("src","images/Nc(R)  rotate left.png")
$("#np1-text").text("NC (R1)")
$("#nor-power-3").attr("src","images/Nc(R)  rotate left.png")
$("#np3-text").text("NC (R1)")
$("#light-2").css("background-color","rgb(0, 255, 0)")
$("#motor-inside").attr("src", "images/Forward-motor.png");
$("#formotor").attr("src", "images/backbox.png");
const image = document.getElementById('motor-inside');
image.classList.remove('rotating');
image.classList.add('rotatingopp');
}

function toggleSwitch(switchId) {
  if (switchId === 'red-but-1') {
      if (stateC) {
        swal.fire({
          text: "NC (PB1) is already on. Turn off NC (PB) first.",
          icon : "info",
          // buttons: {
          //   // cancel: "Cancel",
          //   confirm: "OK"
          // },
          showConfirmButton: true,
          closeOnClickOutside: false
        });
          return;
      }

      stateA = !stateA;
      HandleOn()
      stateC = false;
  } else if (switchId === 'red-but-2') {
      if (stateA) {
        swal({
          text: "NC (PB2) is already on. Turn off NC (PB) first.",
          icon : "info",
          // buttons: {
          //   // cancel: "Cancel",
          //   confirm: "OK"
          // },
          showConfirmButton: true,
          closeOnClickOutside: false
        });
          return;
      }

      stateC = !stateC;
      
      R2on()

      stateA = false;
  } else if (switchId === 'green-but') {
      stateB = !stateB;
      stateA = false;
      stateC = false;
      const image = document.getElementById('motor-inside');
      image.classList.remove('rotating');
      image.classList.remove('rotatingopp');
      $("#motor-inside").attr("src", "images/Forward-motor.png");

      $("#np1-text").text("NO (R1)")
      $("#np2-text").text("NO (R2)")
      $("#np3-text").text("NO (R1)")
      $("#np4-text").text("NO (R2)")
      $("#nc1-text").text("NC (R1)")
      $("#nc2-text").text("NC (R2)")
      $("#no1-text").text("NO (R2)")
      $("#no2-text").text("NO (R1)")
      $("#red1-text").text("NO (PB1)")
      $("#red2-text").text("NO (PB2)")

      $("#nor-1").attr("src","images/No(R).png")
      $("#ncr-2").attr("src","images/Nc(R).png")
      $("#nor-power-1").attr("src","images/No(R) rotate.png")
      $("#nor-power-3").attr("src","images/No(R) rotate.png")
      $("#light-1").css("background-color","rgb(255,0, 0)")

      $("#nor-2").attr("src","images/No(R).png")
      $("#ncr-1").attr("src","images/Nc(R).png")
      $("#nor-power-2").attr("src","images/No(R) rotate.png")
      $("#nor-power-4").attr("src","images/No(R) rotate.png")
      $("#light-2").css("background-color","rgb(255,0,0)")

      stateA = false;
      stateC = false;
      updateSwitches();
  }

  updateSwitches();
}


function performHoverAcLoad(){
  let FanOn = false;
  let Fanflag=false;
  let Fanmove=false;
  stateA = false;
  stateC = false;
  stateB = false;
  $("#ndc").css("cursor","pointer");
  $("#nac").css("cursor","pointer");
  opacity1(["formotor"])
  $("#formotor").attr("src", "images/allbox.png");
$("#ndc").click(() => {
  $("#formotor").attr("src", "images/allbox.png");
  if(!FanOn){
    stateA = false;
    stateB = false;
    stateC = false;
      $("#np1-text").text("NO (R1)")
      $("#np2-text").text("NO (R2)")
      $("#np3-text").text("NO (R1)")
      $("#np4-text").text("NO (R2)")
      $("#nc1-text").text("NC (R1)")
      $("#nc2-text").text("NC (R2)")
      $("#no1-text").text("NO (R2)")
      $("#no2-text").text("NO (R1)")
      $("#red1-text").text("NO (PB1)")
      $("#red2-text").text("NO (PB2)")

      $("#red-but-1").off("click")
      $("#red-but-2").off("click")
      $("#green-but").off("click")
      toggleSwitch('green-but')
      FanOn = true;
      Fanflag=false;
      Fanmove=true;
      const image = document.getElementById('motor-inside');
      image.classList.remove('rotating');
      image.classList.remove('rotatingopp');
      $("#red-but-1").attr("src", "images/red but4.png");
      $("#red-but-2").attr("src", "images/red but4.png");
      $("green-but").attr("src", "images/green but3.png");
      $("#ndc").attr("src", "images/s2.png");
      $("#motor-inside").attr("src", "images/Forward-motor.png");

      $("#nor-1").attr("src","images/No(R).png")
      $("#ncr-2").attr("src","images/Nc(R).png")
      $("#nor-power-1").attr("src","images/No(R) rotate.png")
      $("#nor-power-3").attr("src","images/No(R) rotate.png")
      $("#light-1").css("background-color","rgb(255,0, 0)")

      $("#nor-2").attr("src","images/No(R).png")
      $("#ncr-1").attr("src","images/Nc(R).png")
      $("#nor-power-2").attr("src","images/No(R) rotate.png")
      $("#nor-power-4").attr("src","images/No(R) rotate.png")
      $("#light-2").css("background-color","rgb(255,0,0)")
  }
  else{
    stateA = false;
    stateB = false;
    stateC = false;
      $("#np1-text").text("NO (R1)")
      $("#np2-text").text("NO (R2)")
      $("#np3-text").text("NO (R1)")
      $("#np4-text").text("NO (R2)")
      $("#nc1-text").text("NC (R1)")
      $("#nc2-text").text("NC (R2)")
      $("#no1-text").text("NO (R2)")
      $("#no2-text").text("NO (R1)")
      $("#red1-text").text("NO (PB1)")
      $("#red2-text").text("NO (PB2)")

    toggleSwitch('green-but')
      $("#red-but-1").off("click")
      $("#red-but-2").off("click")
      $("#green-but").off("click")

      $("#ndc").attr("src", "images/s1.png");
      $("#nac").attr("src", "images/s1.png");
      $("#red-but-1").attr("src", "images/red but4.png");
      $("#red-but-2").attr("src", "images/red but4.png");
      $("green-but").attr("src", "images/green but3.png");
      $("#motor-inside").attr("src", "images/Forward-motor.png");
  FanOn = false;
  Fanflag=true
  Fanmove=false;

    const image = document.getElementById('motor-inside');
    image.classList.remove('rotating');
    image.classList.remove('rotatingopp');

    $("#nor-1").attr("src","images/No(R).png")
    $("#ncr-2").attr("src","images/Nc(R).png")
    $("#nor-power-1").attr("src","images/No(R) rotate.png")
    $("#nor-power-3").attr("src","images/No(R) rotate.png")
    $("#light-1").css("background-color","rgb(255,0, 0)")

    $("#nor-2").attr("src","images/No(R).png")
    $("#ncr-1").attr("src","images/Nc(R).png")
    $("#nor-power-2").attr("src","images/No(R) rotate.png")
    $("#nor-power-4").attr("src","images/No(R) rotate.png")
    $("#light-2").css("background-color","rgb(255,0,0)")
  }
});

$("#nac").click(() => {
  $("#formotor").attr("src", "images/allbox.png");
  if(Fanmove){
      if (!Fanflag) {
        console.log("stateA ",stateA,"state b ",stateB,"state c ",stateC)
        stateA = false;
        stateB = false;
        stateC = false;
        id=true
        $("#red-but-1").css("cursor","pointer");
        $("#red-but-2").css("cursor","pointer");
        $("#green-but").css("cursor","pointer");
      $("#nac").attr("src", "images/s2.png");
      $("#ndc").attr("src", "images/s2.png");
      $("#motor-inside").attr("src", "images/Forward-motor.png");
      Fanflag = true;
      $("#red-but-1").on("click",()=>{
        if (!stateA && (stateB || (!stateA && !stateC))) {
          toggleSwitch('red-but-1');
        }
      })
      $("#red-but-2").on("click",()=>{
        if (!stateC && (stateB || (!stateA && !stateC))) {
          toggleSwitch('red-but-2');
        }
      })
      $("#green-but").on("click",()=>{
        toggleSwitch('green-but')
      })
  } else {
    console.log("stateA ",stateA,"state b ",stateB,"state c ",stateC)
    stateA = false;
    stateB = false;
    stateC = false;

      $("#np1-text").text("NO (R1)")
      $("#np2-text").text("NO (R2)")
      $("#np3-text").text("NO (R1)")
      $("#np4-text").text("NO (R2)")
      $("#nc1-text").text("NC (R1)")
      $("#nc2-text").text("NC (R2)")
      $("#no1-text").text("NO (R2)")
      $("#no2-text").text("NO (R1)")
      $("#red1-text").text("NO (PB1)")
      $("#red2-text").text("NO (PB2)")

    toggleSwitch('green-but')
      $("#red-but-1").off("click")
      $("#red-but-2").off("click")
      $("#green-but").off("click")
      $("#nac").attr("src", "images/s1.png");
      $("#motor-inside").attr("src", "images/Forward-motor.png");
      Fanflag = false;
      const image = document.getElementById('motor-inside');
      image.classList.remove('rotating');
      image.classList.remove('rotatingopp');
      $("#red-but-1").attr("src", "images/red but4.png");
      $("#red-but-2").attr("src", "images/red but4.png");
      $("green-but").attr("src", "images/green but3.png");

    $("#nor-1").attr("src","images/No(R).png")
    $("#ncr-2").attr("src","images/Nc(R).png")
    $("#nor-power-1").attr("src","images/No(R) rotate.png")
    $("#nor-power-3").attr("src","images/No(R) rotate.png")
    $("#light-1").css("background-color","rgb(255,0, 0)")

    $("#nor-2").attr("src","images/No(R).png")
    $("#ncr-1").attr("src","images/Nc(R).png")
    $("#nor-power-2").attr("src","images/No(R) rotate.png")
    $("#nor-power-4").attr("src","images/No(R) rotate.png")
    $("#light-2").css("background-color","rgb(255,0,0)")
  }
  }
  stateA = false;
        stateC = false;
        stateB = false;
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
      var endpointsToDelete = ["Dc-power-1-Red","nor-power-red-1","nor-power-red-2","nor-power-red-3","nor-power-red-4","motor-power-red","Dc-power-1-Blue","nor-power-blue-1","nor-power-blue-2","nor-power-blue-3","nor-power-blue-4","motor-power-blue"]
  
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
    //   way(b);                 way is commented
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
  if (len.length < 14) {
    txt = "make connections first";
    alertFunction(txt,"warning");
    powerResetBtn();
    return false;
  }
  if (len.length < 21) {
    txt = "Improper Connections ";
    alertFunction(txt,"warning");
    powerResetBtn();
    return false;
  }

  for (i = 0; i < len.length; i++) {
    let a = len[i].sourceId,
      b = len[i].targetId;
    if((a=="Dc-power-1-Red"        && b=="nor-power-red-1" ) || (b=="Dc-power-1-Red"   && a=="nor-power-red-1" )){cnt+=1}     
    else if((a=="Dc-power-1-Red"   && b=="nor-power-red-4" ) || (b=="Dc-power-1-Red"   && a=="nor-power-red-4" )){cnt+=1}
    else if((a=="Dc-power-1-Blue"  && b=="nor-power-red-2" ) || (b=="Dc-power-1-Blue"  && a=="nor-power-red-2" )){cnt+=1}
    else if((a=="Dc-power-1-Blue"  && b=="nor-power-red-3" ) || (b=="Dc-power-1-Blue"  && a=="nor-power-red-3" )){cnt+=1}
    else if((a=="nor-power-blue-1" && b=="motor-power-red" ) || (b=="nor-power-blue-1" && a=="motor-power-red" )){cnt+=1}
    else if((a=="nor-power-blue-2" && b=="motor-power-red" ) || (b=="nor-power-blue-2" && a=="motor-power-red" )){cnt+=1}
    else if((a=="nor-power-blue-3" && b=="motor-power-blue") || (b=="nor-power-blue-3" && a=="motor-power-blue")){cnt+=1}
    else if((a=="nor-power-blue-4" && b=="motor-power-blue") || (b=="nor-power-blue-4" && a=="motor-power-blue")){cnt+=1}
  }

  if (cnt == 8) {
    opacity1(['comp1','comp2', 'comp3', 'comp4', 'comp8' , 'comp6', 'comp10'])

    txt = "Right Connections";
    $("#powerVerify").off("click")
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
  else if (len.length < 13) {
    txt = "Improper Connections ";
    alertFunction(txt,"warning");
    controlResetBtn();
    return false;
  }

  for (i = 0; i < len.length; i++) {
    let ab = len[i].sourceId,
    ba = len[i].targetId;

    if((ab=="Dc-control-1-Red"      && ba=="green-but-Red"    ) || (ba=="Dc-control-1-Red" && ab=="green-but-Red")     ){cnt+=1}
    else if((ab=="green-but-Blue"   && ba=="red-but-Red-1") || (ba=="green-but-Blue"   && ab=="red-but-Red-1")     ){cnt+=1}
    else if((ab=="green-but-Blue"   && ba=="red-but-Red-2") || (ba=="green-but-Blue"   && ab=="red-but-Red-2")     ){cnt+=1}
    else if((ab=="red-but-Blue-1"   && ba=="nor-blue-1") || (ba=="red-but-Blue-1"   && ab=="nor-blue-1")         ){cnt+=1}
    else if((ab=="red-but-Blue-1"       && ba=="ncr-red-1") || (ba=="red-but-Blue-1"   && ab=="ncr-red-1")         ){cnt+=1}
    else if((ab=="ncr-blue-1"       && ba=="relay-red-1") || (ba=="ncr-blue-1"   && ab=="relay-red-1")       ){cnt+=1}
    else if((ab=="relay-blue-1"     && ba=="relay-blue-2") || (ba=="relay-blue-1"   && ab=="relay-blue-2")      ){cnt+=1}
    else if((ab=="relay-red-2"      && ba=="ncr-blue-2") || (ba=="relay-red-2"   && ab=="ncr-blue-2")        ){cnt+=1}
    else if((ab=="ncr-red-2"        && ba=="red-but-Blue-2") || (ba=="ncr-red-2"   && ab=="red-but-Blue-2")        ){cnt+=1}
    else if((ab=="nor-red-2"        && ba=="red-but-Red-2") || (ba=="nor-red-2"   && ab=="red-but-Red-2")    ){cnt+=1}
    else if((ab=="relay-blue-1"     && ba=="Dc-control-1-Blue") || (ba=="relay-blue-1"   && ab=="Dc-control-1-Blue") || (ab=="relay-blue-2"     && ba=="Dc-control-1-Blue") || (ba=="relay-blue-2"     && ab=="Dc-control-1-Blue")){cnt+=1}
    else if((ab=="nor-red-1" && ba=="red-but-Red-1") || (ba=="nor-red-1" && ab=="red-but-Red-1")){cnt+=1}
    else if((ab=="nor-blue-2" && ba=="red-but-Blue-2") || (ba=="nor-blue-2" && ab=="red-but-Blue-2")){cnt+=1}
  }

  if (cnt == 13) {
    opacity1(['comp1','comp2', 'comp3', 'comp4', 'comp8' , 'comp6', 'comp10'])

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

      opacity1(['comp2', 'comp6',"comp8"])
      opacity0(['comp1', 'comp4', "comp3","comp10"])

      $('#comp8').click(()=>
        {
          $("#Dc-power").attr("src", "images/supply f2.png");
          $("#nac").attr("src", "images/s1.png");
          opacity1(["Dc-power","nac","dc2-text"]);
          endpoints["Dc-power-1-Red"].canvas.style.display = '';
          endpoints["Dc-power-1-Blue"].canvas.style.display = '';
        }
      );
      $('#comp2').click(()=>
        {
          $("#nor-power-1").attr("src", "images/No(R) rotate.png");
          $("#nor-power-2").attr("src", "images/No(R) rotate.png");
          $("#nor-power-3").attr("src", "images/No(R) rotate.png");
          $("#nor-power-4").attr("src", "images/No(R) rotate.png");
          opacity1(["nor-power-1","nor-power-2","nor-power-3","nor-power-4","nor-power-red-1","nor-power-red-2","nor-power-red-3","nor-power-red-4","nor-power-blue-1","nor-power-blue-2","nor-power-blue-3","nor-power-blue-4","nor-power-1-div","nor-power-2-div","nor-power-3-div","nor-power-4-div","np1-text","np2-text","np3-text","np4-text"]);
          endpoints["nor-power-red-1"].canvas.style.display = '';
          endpoints["nor-power-red-2"].canvas.style.display = '';
          endpoints["nor-power-red-3"].canvas.style.display = '';
          endpoints["nor-power-red-4"].canvas.style.display = '';
          endpoints["nor-power-blue-1"].canvas.style.display = '';
          endpoints["nor-power-blue-2"].canvas.style.display = '';
          endpoints["nor-power-blue-3"].canvas.style.display = '';
          endpoints["nor-power-blue-4"].canvas.style.display = '';
        }
      );
      $('#comp6').click(()=>
        {
          $("#motor").attr("src", "images/motor(bg1).png");
          $("#motor-inside").attr("src", "images/Forward-motor.png");
          opacity1(["motor","ncr-2","motor-inside","motor-text"]);
          endpoints["motor-power-red"].canvas.style.display = '';
          endpoints["motor-power-blue"].canvas.style.display = '';
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

    var redPower = ["Dc-power-1-Red","nor-power-red-1","nor-power-red-2","nor-power-red-3","nor-power-red-4","motor-power-red"]
    var bluePower = ["Dc-power-1-Blue","nor-power-blue-1","nor-power-blue-2","nor-power-blue-3","nor-power-blue-4","motor-power-blue"]

    var redDotList = ["Dc-control-1-Red","green-but-Red","red-but-Red-1","red-but-Red-2","nor-red-1","nor-red-2","ncr-red-1","ncr-red-2","relay-red-1","relay-red-2"];
    var blueDotList = ["Dc-control-1-Blue","green-but-Blue","red-but-Blue-1","red-but-Blue-2","nor-blue-1","nor-blue-2","ncr-blue-1","ncr-blue-2","relay-blue-1","relay-blue-2"]

    opacity0(redPower)
    opacity0(bluePower)
    opacity0(["Dc-control-1-Red","green-but-Red","red-but-Red-1","red-but-Red-2","relay-red-1","relay-red-2","dc1-text","green-text","red1-text","red2-text","no1-text","no2-text","nc1-text","nc2-text","r1-text","r2-text"])
    opacity0(["Dc-control-1-Blue","green-but-Blue","red-but-Blue-1","red-but-Blue-2","relay-blue-1","relay-blue-2","motor-text","dc2-text","np1-text","np2-text","np3-text","np4-text","formotor"])


    $("#cc").click(() => {
      opacity0(['comp6', 'comp9'])
      opacity1(['comp1', 'comp4', 'comp8','comp2'])


      // redDotList
      endpointFunction(["Dc-control-1-Red"], red,"8",1)
      endpointFunction(["green-but-Red"   ], red,"8",1)
      endpointFunction(["red-but-Red-1"   ], red,"8",2)
      endpointFunction(["red-but-Red-2"   ], red,"8",2)
      endpointFunction(["nor-red-1"       ], red,"8",1)
      endpointFunction(["nor-red-2"       ], red,"8",1)
      endpointFunction(["ncr-red-1"       ], red,"8",1)
      endpointFunction(["ncr-red-2"       ], red,"8",1)
      endpointFunction(["relay-red-1"     ], red,"8",1)
      endpointFunction(["relay-red-2"     ], red,"8",2)


      // redPower
      endpointFunction(["Dc-power-1-Red"], red,"8",2)
      endpointFunction(["nor-power-red-1"], red,"8",1)
      endpointFunction(["nor-power-red-2"], red,"8",1)
      endpointFunction(["nor-power-red-3"], red,"8",1)
      endpointFunction(["nor-power-red-4"], red,"8",1)
      endpointFunction(["motor-power-red"], red,"6",2)


      // bluePower
      endpointFunction(["Dc-power-1-Blue" ], black,"8",2)
      endpointFunction(["nor-power-blue-1"], black,"8",1)
      endpointFunction(["nor-power-blue-2"], black,"8",1)
      endpointFunction(["nor-power-blue-3"], black,"8",1)
      endpointFunction(["nor-power-blue-4"], black,"8",1)
      endpointFunction(["motor-power-blue"], black,"6",2)


      // blueDotList
      endpointFunction(["Dc-control-1-Blue"], black,"8",1)
      endpointFunction(["green-but-Blue"   ], black,"8",2)
      endpointFunction(["red-but-Blue-1"   ], black,"8",2)
      endpointFunction(["red-but-Blue-2"   ], black,"8",2)
      endpointFunction(["nor-blue-1"       ], black,"8",1)
      endpointFunction(["nor-blue-2"       ], black,"8",1)
      endpointFunction(["ncr-blue-1"       ], black,"8",1)
      endpointFunction(["ncr-blue-2"       ], black,"8",1)
      endpointFunction(["relay-blue-1"     ], black,"8",2)
      endpointFunction(["relay-blue-2"     ], black,"8",2)

      $('#comp1').click(()=>
        {
          $("#relay-1").attr("src", "images/relay img.png");
          $("#relay-2").attr("src", "images/relay img.png");
          // $("#relaytext").text("4C/O Relay 12V DC ")
          opacity1(["relay-1","relay-2","light-1","light-2","r1-text","r2-text"])
          endpoints["relay-red-1"].canvas.style.display = '';
          endpoints["relay-red-2"].canvas.style.display = '';
          endpoints["relay-blue-1"].canvas.style.display = '';
          endpoints["relay-blue-2"].canvas.style.display = '';
        }
      );
      $('#comp4').click(()=>
        {
          $("#red-but-1").attr("src", "images/red but4.png");
          $("#red-but-2").attr("src", "images/red but4.png");
          opacity1(["red-but-1","red-but-2","red1-text","red2-text"])
          // $("#redtext").text("Push Button")
          endpoints["red-but-Blue-1"].canvas.style.display = '';
          endpoints["red-but-Blue-2"].canvas.style.display = '';
          endpoints["red-but-Red-1"].canvas.style.display = '';
          endpoints["red-but-Red-2"].canvas.style.display = '';
        }
      );
      $('#comp10').click(()=>
        {
          $("green-but").attr("src", "images/green but3  rotate.png");
          opacity1(["green-but","green-text"])
          // $("#redtext").text("Push Button")
          endpoints["green-but-Blue"].canvas.style.display = '';
          endpoints["green-but-Red"].canvas.style.display = '';
        }
      );
      $('#comp8').click(()=>
        {
          $("#dc").attr("src", "images/supply f2.png");
          $("#ndc").attr("src", "images/s1.png");
          // $("#dctext").text("DC supply 12V")
          opacity1(["dc","ndc","dc1-text"]);
          endpoints["Dc-control-1-Blue"].canvas.style.display = '';
          endpoints["Dc-control-1-Red"].canvas.style.display = '';
        }
      );
      $('#comp2').click(()=>
        {
          $("#nor-1").attr("src", "images/No(R).png");
          $("#nor-2").attr("src", "images/No(R).png");
          opacity1(["nor-1","nor-2","no1-text","no2-text"]);
          opacity1(["nor-red-1","nor-red-2","nor-1-div","nor-2-div"])
          opacity1(["nor-blue-1","nor-blue-2"])
          endpoints["nor-blue-1"].canvas.style.display = '';
          endpoints["nor-blue-2"].canvas.style.display = '';
          endpoints["nor-red-1"].canvas.style.display = '';
          endpoints["nor-red-2"].canvas.style.display = '';
        }
      );
      $('#comp3').click(()=>
        {
          $("#ncr-1").attr("src", "images/Nc(R).png");
          $("#ncr-2").attr("src", "images/Nc(R).png");
          opacity1(["ncr-1","ncr-2"]);
          opacity1(["ncr-red-1","ncr-red-2","ncr-1-div","ncr-2-div","nc1-text","nc2-text"])
          opacity1(["ncr-blue-1","ncr-blue-2"])
          endpoints["ncr-blue-1"].canvas.style.display = '';
          endpoints["ncr-blue-2"].canvas.style.display = '';
          endpoints["ncr-red-1"].canvas.style.display = '';
          endpoints["ncr-red-2"].canvas.style.display = '';
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
//     {
//       $('#component2').attr("src","images/no b.png")
//       $('#component2-nor').text("Nc (R)")
//     }
// ).mouseout(()=>{
//   $('#component2').attr("src","images/nc b.png")
//   $('#component2-nor').text("No(R)")
// })

// $('#comp2').mouseover(()=>
//     {
//       $('#component2').attr("src","images/nc b.png")
//       $('#component2-nor').text("Nc (R)")
//     }
// ).mouseout(()=>{
//   $('#component2').attr("src","images/no b.png")
//   $('#component2-nor').text("No(R)")
// })

// $('#comp4').mouseover(()=>
//     {
//       $('#component4').attr("src","images/green but3  rotate.png")
//       $('#component4-po').text("Push close Button")
//     }
// ).mouseout(()=>{
//   $('#component4').attr("src","images/red but4 rotate.png")
//   $('#component4-po').text("Push open Button")
// })