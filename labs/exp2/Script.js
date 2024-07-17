var connections;
var endpoints = {};
var instance;

let ck = false;
let a = false;
let b = false;
let acSlider = true;

var red = {
  paintStyle: { fill: "red"},
  connector: ["Bezier", { curviness:10  }],
  connectorStyle: { stroke: "#2245FC", strokeWidth: 2 },
};
var black = {
  paintStyle: { fill: "blue"},
  connector: ["Bezier", { curviness:70 }],
  connectorStyle: { stroke: "#2245FC", strokeWidth: 2 },
};

function performHoverAcLoad(p1,p2,p3){                                                    //after all connections change img on hover(5)
    let FanOn = p1;                            
    let Fanflag=p2;
    let Fanmove=p3;
    
$("#ndc").click(() => {
  console.log("lamp : ",FanOn," ",Fanflag," ",Fanmove)
  const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');

                
    
    if(!FanOn){
        $("#ndc").attr("src", "images/s2.png");
        $("#rotatingImage").attr("src", "images/fan1.png");
        FanOn = true;
        Fanflag=false;
        Fanmove=true;
            $("#red").mouseover(() => {
                $("#red").attr("src", "images/red but4.png");
                $("#redtext").text("NO(PB)")
                $("#cnor").attr("src", "images/No(R).png");
                $("#cnortext").text("No(R)")
                $("#nor").attr("src", "images/No(R).png");
                $("#red").css("cursor","default");
                $("#light").css("background-color", "red");
                $("#rotatingImage").attr("src","images/fan1.png");
                $("#nortext").text("No(R)")
                const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
              }).mouseout(() => {
                $("#red").attr("src", "images/red but4.png");
                $("#redtext").text("NO(PB)")
                $("#cnor").attr("src", "images/No(R).png");
                $("#cnortext").text("No(R)")
                $("#nor").attr("src", "images/No(R).png");
                $("#red").css("cursor","default");
                $("#light").css("background-color", "red");
                $("#rotatingImage").attr("src","images/fan1.png");
                $("#nortext").text("No(R)")
                const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
              })

              $("#green").mouseover(() => {
                $("#green").attr("src", "images/green but3.png");
                $("#greentext").text("NC(PB)")
                $("#cnor").attr("src", "images/No(R).png");
                $("#cnortext").text("No(R)")
                $("#nor").attr("src", "images/No(R).png");
                $("#red").css("cursor","default");
                $("#light").css("background-color", "red");
                $("#rotatingImage").attr("src","images/fan1.png");
                $("#nortext").text("No(R)")
                const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
              }).mouseout(() => {
                $("#green").attr("src", "images/green but3.png");
                $("#greentext").text("NC(PB)")
                $("#cnor").attr("src", "images/No(R).png");
                $("#cnortext").text("No(R)")
                $("#nor").attr("src", "images/No(R).png");
                $("#red").css("cursor","default");
                $("#light").css("background-color", "red");
                $("#rotatingImage").attr("src","images/fan1.png");
                $("#nortext").text("No(R)")
                const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
              })
                
    }
    else{
      const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
        $("#ndc").attr("src", "images/s1.png");
        $("#nac").attr("src", "images/s1.png");
    $("#rotatingImage").attr("src", "images/fan1.png");                                   
      
    $("#red").attr("src", "images/red but4.png");                   // everything off on switch 1 click
          $("#redtext").text("NO(PB)")
          $("#greentext").text("NC(PB)")
          $("#cnor").attr("src", "images/No(R).png");
          $("#cnortext").text("No(R)")
          $("#nor").attr("src", "images/No(R).png");
          $("#red").css("cursor","default");
          $("#light").css("background-color", "red");
          $("#lamp").attr("src", "images/lamp off.png");             
          $("#nortext").text("No(R)")
       
     
    FanOn = false;
    Fanflag=true
    Fanmove=false;
    $("#red").mouseover(() => {
      $("#red").attr("src", "images/red but4.png");
      $("#redtext").text("NO(PB)")
      $("#cnor").attr("src", "images/No(R).png");
      $("#cnortext").text("No(R)")
      $("#nor").attr("src", "images/No(R).png");
      $("#red").css("cursor","default");
      $("#light").css("background-color", "red");
      $("#rotatingImage").attr("src","images/fan1.png");
      $("#nortext").text("No(R)")
      const image = document.getElementById('rotatingImage');
      image.classList.remove('rotating');
      }).mouseout(() => {
        $("#red").attr("src", "images/red but4.png");
        $("#redtext").text("NO(PB)")
        $("#cnor").attr("src", "images/No(R).png");
        $("#cnortext").text("No(R)")
        $("#nor").attr("src", "images/No(R).png");
        $("#red").css("cursor","default");
        $("#light").css("background-color", "red");
        $("#rotatingImage").attr("src","images/fan1.png");
        $("#nortext").text("No(R)")
        const image = document.getElementById('rotatingImage');
        image.classList.remove('rotating');
      });
      $("#green").mouseover(() => {
        $("#green").attr("src", "images/green but3.png");
        $("#greentext").text("NC(PB)")
        $("#cnor").attr("src", "images/No(R).png");
        $("#cnortext").text("No(R)")
        $("#nor").attr("src", "images/No(R).png");
        $("#red").css("cursor","default");
        $("#light").css("background-color", "red");
        $("#rotatingImage").attr("src","images/fan1.png");
        $("#nortext").text("No(R)")
        const image = document.getElementById('rotatingImage');
        image.classList.remove('rotating');
        }).mouseout(() => {
          $("#green").attr("src", "images/green but3.png");
          $("#greentext").text("NC(PB)")
          $("#cnor").attr("src", "images/No(R).png");
          $("#cnortext").text("No(R)")
          $("#nor").attr("src", "images/No(R).png");
          $("#red").css("cursor","default");
          $("#light").css("background-color", "red");
          $("#rotatingImage").attr("src","images/fan1.png");
          $("#nortext").text("No(R)")
          const image = document.getElementById('rotatingImage');
          image.classList.remove('rotating');
        });
      
    }
});





$("#nac").click(() => {
  const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
    if(Fanmove){
        if (!Fanflag) {
        $("#rotatingImage").attr("src", "images/fan1.png");                 // image changes fro  line 85 to 107
        $("#nac").attr("src", "images/s2.png");
        $("#ndc").attr("src", "images/s2.png");

        
        Fanflag = true;
        $("#red").mouseover(() => {

          $("#red").attr("src", "images/green but3.png");
          $("#redtext").text("NO(PB)-Close")
          $("#cnor").attr("src", "images/Nc(R).png");
          $("#cnortext").text("Nc(R)")
          $("#nor").attr("src", "images/Nc(R).png");
          $("#red").css("cursor","default");
          $("#light").css("background-color", "green");
          $("#rotatingImage").attr("src","images/fan1.png");
          $("#nortext").text("Nc(R)")
      const image = document.getElementById('rotatingImage');
      image.classList.add('rotating');
      }).mouseout(() => {
        $("#red").attr("src", "images/red but4.png");
        $("#redtext").text("NO(PB)-Open")
        $("#cnor").attr("src", "images/Nc(R).png");
        $("#cnortext").text("Nc(R)")
        $("#nor").attr("src", "images/Nc(R).png");
        $("#red").css("cursor","default");
        $("#light").css("background-color", "green");
        $("#rotatingImage").attr("src","images/fan1.png");
        $("#nortext").text("Nc(R)")
    const image = document.getElementById('rotatingImage');
    image.classList.add('rotating');
      });
      $("#green").mouseover(() => {
        $("#green").attr("src", "images/red but4.png");
        $("#greentext").text("NC(PB)-Open")
        $("#cnor").attr("src", "images/No(R).png");
        $("#cnortext").text("No(R)")
        $("#nor").attr("src", "images/No(R).png");
        $("#red").css("cursor","default");
        $("#light").css("background-color", "red");
        $("#rotatingImage").attr("src","images/fan1.png");
        $("#nortext").text("No(R)")
        const image = document.getElementById('rotatingImage');
        image.classList.remove('rotating');
        }).mouseout(() => {
          $("#green").attr("src", "images/green but3.png");
        $("#greentext").text("NC(PB)-Close")
        $("#cnor").attr("src", "images/No(R).png");
        $("#cnortext").text("No(R)")
        $("#nor").attr("src", "images/No(R).png");
        $("#red").css("cursor","default");
        $("#light").css("background-color", "red");
        $("#rotatingImage").attr("src","images/fan1.png");
        $("#nortext").text("No(R)")
        const image = document.getElementById('rotatingImage');
        image.classList.remove('rotating');
        });
      


    } else {
      const image = document.getElementById('rotatingImage');

      image.classList.remove('rotating');
        $("#rotatingImage").attr("src", "images/fan1.png");
        $("#nac").attr("src", "images/s1.png");

        
        $("#nac").attr("src", "images/s1.png");
    $("#rotatingImage").attr("src", "images/fan1.png");                                   
      
    $("#red").attr("src", "images/red but4.png");  
    $("#greentext").text("NC(PB)")                 // everything off on switch 1 click
          $("#redtext").text("NO(PB)")
          $("#cnor").attr("src", "images/No(R).png");
          $("#cnortext").text("No(R)")
          $("#nor").attr("src", "images/No(R).png");
          $("#red").css("cursor","default");
          $("#light").css("background-color", "red");
          $("#lamp").attr("src", "images/lamp off.png");             
          $("#nortext").text("No(R)")
       

        Fanflag = false;
        $("#red").mouseover(() => {
          $("#red").attr("src", "images/red but4.png");
          $("#redtext").text("NO(PB)")
          $("#cnor").attr("src", "images/No(R).png");
          $("#cnortext").text("No(R)")
          $("#nor").attr("src", "images/No(R).png");
          $("#red").css("cursor","default");
          $("#light").css("background-color", "red");
          $("#rotatingImage").attr("src","images/fan1.png");
          $("#nortext").text("No(R)")
          const image = document.getElementById('rotatingImage');
          image.classList.remove('rotating');
          }).mouseout(() => {
            $("#red").attr("src", "images/red but4.png");
            $("#redtext").text("NO(PB)")
            $("#cnor").attr("src", "images/No(R).png");
            $("#cnortext").text("No(R)")
            $("#nor").attr("src", "images/No(R).png");
            $("#red").css("cursor","default");
            $("#light").css("background-color", "red");
            $("#rotatingImage").attr("src","images/fan1.png");
            $("#nortext").text("No(R)")
            const image = document.getElementById('rotatingImage');
            image.classList.remove('rotating');
          });
          $("#green").mouseover(() => {
            $("#green").attr("src", "images/green but3.png");
            $("#greentext").text("NC(PB)")
            $("#cnor").attr("src", "images/No(R).png");
            $("#cnortext").text("No(R)")
            $("#nor").attr("src", "images/No(R).png");
            $("#red").css("cursor","default");
            $("#light").css("background-color", "red");
            $("#rotatingImage").attr("src","images/fan1.png");
            $("#nortext").text("No(R)")
            const image = document.getElementById('rotatingImage');
            image.classList.remove('rotating');
            }).mouseout(() => {
              $("#green").attr("src", "images/green but3.png");
              $("#greentext").text("NC(PB)")
              $("#cnor").attr("src", "images/No(R).png");
              $("#cnortext").text("No(R)")
              $("#nor").attr("src", "images/No(R).png");
              $("#red").css("cursor","default");
              $("#light").css("background-color", "red");
              $("#rotatingImage").attr("src","images/fan1.png");
              $("#nortext").text("No(R)")
              const image = document.getElementById('rotatingImage');
              image.classList.remove('rotating');
            });
    }
  }
    });
}


function performHoverDcLoad(p1,p2,p3){
    let lampOn = p1;
    let lampflag=p2;
    let lampmove=p3;
    const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
$("#dcload-control").click(() => {
    console.log("lamp : ",lampOn," ",lampflag," ",lampmove)
    const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
    if(!lampOn){
        $("#dcload-control").attr("src", "images/s2.png");
        $("#lamp").attr("src", "images/lamp off.png");
        lampOn = true;
        lampflag=false;
        lampmove=true;
        $("#red").mouseover(() => {
          $("#red").attr("src", "images/red but4.png");
          $("#redtext").text("NO(PB)")
          $("#cnor").attr("src", "images/No(R).png");
          $("#cnortext").text("No(R)")
          $("#nor").attr("src", "images/No(R).png");
          $("#red").css("cursor","default");
          $("#light").css("background-color", "red");
          $("#lamp").attr("src","images/lamp off.png");
          $("#nortext").text("No(R)")
          
            const image = document.getElementById('rotatingImage');
            image.classList.remove('rotating');
        }).mouseout(() => {
          $("#red").attr("src", "images/red but4.png");
          $("#redtext").text("NO(PB)")
          $("#cnor").attr("src", "images/No(R).png");
          $("#cnortext").text("No(R)")
          $("#nor").attr("src", "images/No(R).png");
          $("#red").css("cursor","default");
          $("#light").css("background-color", "red");
          $("#lamp").attr("src","images/lamp off.png");
          $("#nortext").text("No(R)")
            const image = document.getElementById('rotatingImage');
            image.classList.remove('rotating');
        });
        $("#green").mouseover(() => {
          $("#green").attr("src", "images/green but3.png");
          $("#greentext").text("NC(PB)")
          $("#cnor").attr("src", "images/No(R).png");
          $("#cnortext").text("No(R)")
          $("#nor").attr("src", "images/No(R).png");
          $("#red").css("cursor","default");
          $("#light").css("background-color", "red");
          $("#lamp").attr("src","images/lamp off.png");
          $("#nortext").text("No(R)")
          const image = document.getElementById('rotatingImage');
          image.classList.remove('rotating');

        }).mouseout(() => {
          $("#green").attr("src", "images/green but3.png");
          $("#greentext").text("NC(PB)")
          $("#cnor").attr("src", "images/No(R).png");
          $("#cnortext").text("No(R)")
          $("#nor").attr("src", "images/No(R).png");
          $("#red").css("cursor","default");
          $("#light").css("background-color", "red");
          $("#lamp").attr("src","images/lamp off.png");
          $("#nortext").text("No(R)")
          const image = document.getElementById('rotatingImage');
          image.classList.remove('rotating');
        })
    }
    else{
      const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
        $("#dcload-control").attr("src", "images/s1.png");
        $("#dcload-power").attr("src", "images/s1.png");
    $("#lamp").attr("src", "images/lamp off.png");

    $("#red").attr("src", "images/red but4.png");                          //everything off on switch 1 click
          $("#redtext").text("NO(PB)")
          $("#cnor").attr("src", "images/No(R).png");
          $("#cnortext").text("No(R)")
          $("#nor").attr("src", "images/No(R).png");
          $("#red").css("cursor","default");
          $("#light").css("background-color", "red");
          $("#lamp").attr("src", "images/lamp off.png");                 //
          $("#nortext").text("No(R)")
          $("#greentext").text("NC(PB)")

    lampOn = false;
    lampflag=true
    lampmove=false;
    $("#red").mouseover(() => {
      $("#red").attr("src", "images/red but4.png");
      $("#redtext").text("NO(PB)")
      $("#cnor").attr("src", "images/No(R).png");
      $("#cnortext").text("No(R)")
      $("#nor").attr("src", "images/No(R).png");
      $("#red").css("cursor","default");
      $("#light").css("background-color", "red");
      $("#lamp").attr("src","images/lamp off.png");
      $("#nortext").text("No(R)")
        const image = document.getElementById('rotatingImage');
        image.classList.remove('rotating');
      }).mouseout(() => {
        $("#red").attr("src", "images/red but4.png");
        $("#redtext").text("NO(PB)")
        $("#cnor").attr("src", "images/No(R).png");
        $("#cnortext").text("No(R)")
        $("#nor").attr("src", "images/No(R).png");
        $("#red").css("cursor","default");
        $("#light").css("background-color", "red");
        $("#lamp").attr("src","images/lamp off.png");
        $("#nortext").text("No(R)")
        const image = document.getElementById('rotatingImage');
        image.classList.remove('rotating');
      });
      $("#green").mouseover(() => {
        $("#green").attr("src", "images/green but3.png");
        $("#greentext").text("NC(PB)")
        $("#cnor").attr("src", "images/No(R).png");
        $("#cnortext").text("No(R)")
        $("#nor").attr("src", "images/No(R).png");
        $("#red").css("cursor","default");
        $("#light").css("background-color", "red");
        $("#lamp").attr("src","images/lamp off.png");
        $("#nortext").text("No(R)")
        const image = document.getElementById('rotatingImage');
        image.classList.remove('rotating');

      }).mouseout(() => {
        $("#green").attr("src", "images/green but3.png");
        $("#greentext").text("NC(PB)")
        $("#cnor").attr("src", "images/No(R).png");
        $("#cnortext").text("No(R)")
        $("#nor").attr("src", "images/No(R).png");
        $("#red").css("cursor","default");
        $("#light").css("background-color", "red");
        $("#lamp").attr("src","images/lamp off.png");
        $("#nortext").text("No(R)")
        const image = document.getElementById('rotatingImage');
        image.classList.remove('rotating');
      })
    }
});

$("#dcload-power").click(() => {
  const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
    if(lampmove){
        if (!lampflag) {
        $("#lamp").attr("src", "images/lamp off.png");
        $("#dcload-power").attr("src", "images/s2.png");
        $("#dcload-control").attr("src", "images/s2.png");
        lampflag = true;
        $("#red").mouseover(() => {
          $("#red").attr("src", "images/green but3.png");
          $("#redtext").text("NO(PB)-Close")
          $("#cnor").attr("src", "images/Nc(R).png");
          $("#cnortext").text("Nc(R)")
          $("#nor").attr("src", "images/Nc(R).png");
          $("#red").css("cursor","default");
          $("#light").css("background-color", "green");
          $("#lamp").attr("src","images/Lamp on.png");
          $("#nortext").text("Nc(R)")
            const image = document.getElementById('rotatingImage');
            image.classList.add('rotating');
          }).mouseout(() => {
            $("#red").attr("src", "images/red but4.png");
          $("#redtext").text("NO(PB)-Open")
          $("#cnor").attr("src", "images/Nc(R).png");
          $("#cnortext").text("Nc(R)")
          $("#nor").attr("src", "images/Nc(R).png");
          $("#red").css("cursor","default");
          $("#light").css("background-color", "green");
          $("#lamp").attr("src","images/Lamp on.png");
          $("#nortext").text("Nc(R)")
            const image = document.getElementById('rotatingImage');
            image.classList.add('rotating');
          });

          $("#green").mouseover(() => {
            $("#green").attr("src", "images/red but4.png");
            $("#greentext").text("NC(PB)-Open")
            $("#cnor").attr("src", "images/No(R).png");
            $("#cnortext").text("No(R)")
            $("#nor").attr("src", "images/No(R).png");
            $("#red").css("cursor","default");
            $("#light").css("background-color", "red");
            $("#lamp").attr("src","images/lamp off.png");
            $("#nortext").text("No(R)")
            const image = document.getElementById('rotatingImage');
            image.classList.remove('rotating');
            }).mouseout(() => {
              $("#green").attr("src", "images/green but3.png");
            $("#greentext").text("NC(PB)-Close")
            $("#cnor").attr("src", "images/No(R).png");
            $("#cnortext").text("No(R)")
            $("#nor").attr("src", "images/No(R).png");
            $("#red").css("cursor","default");
            $("#light").css("background-color", "red");
            $("#lamp").attr("src","images/lamp off.png");
            $("#nortext").text("No(R)")
            const image = document.getElementById('rotatingImage');
            image.classList.remove('rotating');
            });
          
               


    } else {
      const image = document.getElementById('rotatingImage');

                image.classList.remove('rotating');
                $("#lamp").attr("src", "images/lamp off.png");
          
        $("#dcload-power").attr("src", "images/s1.png");

          $("#red").attr("src", "images/red but4.png");                   // everything off on switch 2 click
          $("#redtext").text("NO(PB)")
          $("#cnor").attr("src", "images/No(R).png");
          $("#cnortext").text("No(R)")
          $("#nor").attr("src", "images/No(R).png");
          $("#red").css("cursor","default");
          $("#light").css("background-color", "red");
          $("#lamp").attr("src", "images/lamp off.png");             
          $("#nortext").text("No(R)")
          $("#greentext").text("NC(PB)")

        lampflag = false;
        $("#red").mouseover(() => {
          $("#lamp").attr("src", "images/lamp off.png");
          $("#red").attr("src", "images/red but4.png");
          $("#redtext").text("NO(PB)")
          $("#cnor").attr("src", "images/No(R).png");
          $("#cnortext").text("No(R)")
          $("#nor").attr("src", "images/No(R).png");
          $("#red").css("cursor","default");
          $("#light").css("background-color", "red");
          $("#lamp").attr("src", "images/lamp off.png");                 //
          $("#nortext").text("No(R)")
          const image = document.getElementById('rotatingImage');
          image.classList.remove('rotating');
          }).mouseout(() => {
            $("#lamp").attr("src", "images/lamp off.png");
            $("#red").attr("src", "images/red but4.png");
            $("#redtext").text("NO(PB)")
            $("#cnor").attr("src", "images/No(R).png");
            $("#cnortext").text("No(R)")
            $("#nor").attr("src", "images/No(R).png");
            $("#red").css("cursor","default");
            $("#light").css("background-color", "red");
            $("#lamp").attr("src", "images/lamp off.png");                       //
            $("#nortext").text("No(R)")
            const image = document.getElementById('rotatingImage');
            image.classList.remove('rotating');
          });
          $("#green").mouseover(() => {
            $("#lamp").attr("src", "images/lamp off.png");
            $("#green").attr("src", "images/green but3.png");
            $("#greentext").text("NC(PB)")
            $("#cnor").attr("src", "images/No(R).png");
            $("#cnortext").text("No(R)")
            $("#nor").attr("src", "images/No(R).png");
            $("#red").css("cursor","default");
            $("#light").css("background-color", "red");
            $("#lamp").attr("src", "images/lamp off.png");                        //
            $("#nortext").text("No(R)")
            const image = document.getElementById('rotatingImage');
            image.classList.remove('rotating');
            }).mouseout(() => {
              $("#lamp").attr("src", "images/lamp off.png");
              $("#green").attr("src", "images/green but3.png");
              $("#greentext").text("NC(PB)")
              $("#cnor").attr("src", "images/No(R).png");
              $("#cnortext").text("No(R)")
              $("#nor").attr("src", "images/No(R).png");
              $("#red").css("cursor","default");
              $("#light").css("background-color", "red");
              $("#lamp").attr("src", "images/lamp off.png");                           //
              $("#nortext").text("No(R)")
              const image = document.getElementById('rotatingImage');
              image.classList.remove('rotating');
            });
    }
    }
});
}


function onPrint() {
  setTimeout(() => {
      domtoimage.toPng(document.body)
      .then(function (dataUrl) {
          const a = document.createElement('a');
          a.setAttribute('download', 'imageName.png');
          a.setAttribute('href', dataUrl);
          a.click();
      })
      .catch(function (error) {
          console.error('Error capturing the image:', error);
      });
  }, 100); 
}


function way(cks,p1,p2,p3) {
  if (cks) {
    if(acSlider){
      const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
        performHoverAcLoad(p1,p2,p3)
                image.classList.remove('rotating');
    }
    else{
      const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
        performHoverDcLoad(p1,p2,p3)
                image.classList.remove('rotating');
    }

  }
}

function powerResetBtn() {
  $("#powerReset").click(() => {
    if (!b) {
      var endpointsToDelete = ["acu", "nd","bd","acd", "nu", "bu"];
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
  swal({
    icon: iconName,
    title: txt
  });
} 

function endpointFunction(list, color,size,connection_length) {
  list.forEach(function (dotId) {
    endpoints[dotId] = instance.addEndpoint(
      dotId,
      {
        endpoint: [ "Dot", {radius: size}],
        anchor: "Center",
        isSource: true,
        isTarget: true,
        maxConnections: connection_length,
        
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

function checkControl() {                                       //check cotrol circuit connection
  let len = connections.getConnections();
  let cnt = 0;
  if (len.length < 6) {
    txt = "Improper Connections ";
    alertFunction(txt,"warning");                        //cll alertfunction 
    controlResetBtn();
    return false;
  }

  for (i = 0; i < len.length; i++) {
    let ab = len[i].sourceId,
      ba = len[i].targetId;
      console.log(ab,ba)
    if ((ab == "dcu" && ba == "greenu") || (ba == "dcu" && ab == "greenu")) {
      cnt += 1;
    } else if ((ab == "greend" && ba == "redu") || (ba == "greend" && ab == "redu")) {
      cnt += 1;
    } else if ((ab == "redd" && ba == "cnord") || (ba == "redd" && ab == "cnord")) {
      cnt += 1;
    } else if ((ab == "redu" && ba == "cnoru") || (ba == "redu" && ab == "cnoru")) {
      cnt += 1;
    } else if  ((ab == "redd" && ba == "ru") || (ba == "redd" && ab == "ru")) {
      cnt += 1;
    } else if ((ab == "dcd" && ba == "rd") || (ba == "dcd" && ab == "rd")) {
      cnt += 1;
    } 
  }

  if (cnt == 6) {
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

    $("#pc").click(() => {                                            //power circuit

      ['comp1', 'comp4', 'comp8' , 'comp11'].forEach(function (id) {
        let component = document.getElementById(id);
        component.style.opacity = '0.1';
      });

      ['comp2', 'comp6', 'comp9'].forEach(function (id) {
        document.getElementById(id).style.opacity = '1';
      })

      endpointFunction(["nu"], red,"8",1);
      endpointFunction(["nd"], black,"8",1)
      endpointFunction(["acu","bu"], red,"8",1);
      endpointFunction(["bd","acd"], black,"8",1)

      $('#comp6').click(()=>{
        $("#rotatingImage").attr("src","images/fan1.png")
        $("#bulbtext").text("Fan")
        $("#LoadName").text("AC Load")
        $("#LoadName").css("opacity", "1");
        $(".bulbimg").css("opacity", "1");
        $("#rotatingImage").css("opacity", "1");
        $("#fan-outer").css("border","3px solid black")
        $(".bulbimg").css("background-color","black")
        $(".bulbimg").css("opacity","1")
        $("#fan-outer").css("opacity","1")
        $("#fan-border").css("opacity","1")
        endpoints["bu"].canvas.style.display = '';
        endpoints["bd"].canvas.style.display = '';
      });
      $('#comp2').click(()=>{
        $("#nor").attr("src", "images/No(R).png");
        $("#nortext").text("No(R)")
        $("#nordowntext").text("Control Button")
        $(".pressNor").css("border","2px solid red")
        $("#nu").css("opacity","1")
        $("#nordowntext").css("opacity","1")
        $("#nd").css("opacity","1")
        $("#nor").css("opacity", "1");
        $(".pressNor").css("opacity","1")
        endpoints["nu"].canvas.style.display = '';
        endpoints["nd"].canvas.style.display = '';
      });
      $('#comp9').click(()=>{
        $("#ac").attr("src", "images/power supply.png");
        $("#actext").text("AC supply 1-phase 230v 50 Hz")
        $("#nac").attr("src", "images/s1.png");
        $("#ac").css("opacity", "1");
        $("#nac").css("opacity", "1");
          endpoints["acu"].canvas.style.display = '';
          endpoints["acd"].canvas.style.display = '';
      });

      var checkbox = document.getElementById('slider');
      $('input[name="toggle"]').change(function() {
        var endpointsToDelete = ["acu", "nd","bd","acd", "nu", "bu"];
        let len=instance.getAllConnections();
        b=false
        powerResetBtn()

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
        let selectedLoad = $('input[name="toggle"]:checked').next('label').text();
        if(selectedLoad=="AC Load"){
            acSlider = true
            instance.deleteEndpoint(endpoints["acu"]);
            instance.deleteEndpoint(endpoints["acd"]);
            const image = document.getElementById('rotatingImage');
            image.classList.remove('rotating');
  
            $("#ndc").attr("src","images/s1.png")
            $("#nac").attr("src","images/s1.png")
  
            $("#rotatingImage").css("display", "inline");
            $("#lamp").css("display", "none");
  
            $("#LoadName").text("AC Load")
          $("#LoadName").css("opacity", "1");
  
            //switches
            $("#dcload-power").css("display",'none')
            $("#dcload-control").css("display", "none");
            $("#nac").css("display",'inline')
            $("#ndc").css("display", "inline");
  
  
  
            $("#nac").click(()=>{
              $("#red").mouseover(() => {
                $("#red").attr("src", "images/red but4.png");
                $("#redtext").text("NO(PB)")
                $("#cnor").attr("src", "images/No(R).png");
                $("#cnortext").text("No(R)")
                $("#nor").attr("src", "images/No(R).png");
                $("#red").css("cursor","default");
                $("#light").css("background-color", "red");
                $("#rotatingImage").attr("src","images/fan1.png");
                $("#nortext").text("No(R)")
                const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
                }).mouseout(() => {
                  $("#red").attr("src", "images/red but4.png");
                  $("#redtext").text("NO(PB)")
                  $("#cnor").attr("src", "images/No(R).png");
                  $("#cnortext").text("No(R)")
                  $("#nor").attr("src", "images/No(R).png");
                  $("#red").css("cursor","default");
                  $("#light").css("background-color", "red");
                  $("#rotatingImage").attr("src","images/fan1.png");
                  $("#nortext").text("No(R)")
                  const image = document.getElementById('rotatingImage');
                  image.classList.remove('rotating');
                });
                $("#green").mouseover(() => {
                  $("#green").attr("src", "images/green but3.png");
                  $("#greentext").text("NC(PB)")
                  $("#cnor").attr("src", "images/No(R).png");
                  $("#cnortext").text("No(R)")
                  $("#nor").attr("src", "images/No(R).png");
                  $("#red").css("cursor","default");
                  $("#light").css("background-color", "red");
                  $("#rotatingImage").attr("src","images/fan1.png");
                  $("#nortext").text("No(R)")
                  const image = document.getElementById('rotatingImage');
                  image.classList.remove('rotating');
                  }).mouseout(() => {
                    $("#green").attr("src", "images/green but3.png");
                    $("#greentext").text("NC(PB)")
                    $("#cnor").attr("src", "images/No(R).png");
                    $("#cnortext").text("No(R)")
                    $("#nor").attr("src", "images/No(R).png");
                    $("#red").css("cursor","default");
                    $("#light").css("background-color", "red");
                    $("#rotatingImage").attr("src","images/fan1.png");
                    $("#nortext").text("No(R)")
                    const image = document.getElementById('rotatingImage');
                    image.classList.remove('rotating');
                  });
                })
  
            $("#rotatingImage").attr("src","images/fan1.png")
            $("#component6").attr("src","images/fan1.png")
            $("#bulbtext").text("Fan")
            $("#component6-b").text("Fan")
            $(".fan-bulb-header").text("Fan")
  
            $("#acu").css({
              "top":'51.5%',
              "left":'8.5%'
            })
            $("#ac").css({
              "position":" absolute",
              "width":" 40%",
              "height":"27%",
              "top":" 35%",
              "left": "2%",
              "opacity": "1"
            })
            $("#nac").css({
              "width": "9%",
              "height":"12%",
              "top": "43%",
              "left":" 22%",
              "opacity":"1"
            })
            $("#acd").css("top",'51.5%')
            $("#acd").css("left",'12.9%')
            $("#actext").css("left"," 5%")
            $("#actext").css("top"," 57%")
            $("#comp8").css("opacity",'0.1')
            $("#comp9").css("opacity",'1')
  
            $("#red").attr("src", "images/red but4.png");
            $("#ac").attr("src", "images/power supply.png");
            $("#actext").text("AC supply 1-phase 230v 50 Hz")
            $("#green").attr("src", "images/green but3.png");
            $("#redtext").text("NO(PB)")
            $("#cnor").attr("src", "images/No(R).png");
            $("#cnortext").text("No(R)")
            $("#nor").attr("src", "images/No(R).png");
            $("#red").css("cursor","default");
            $("#light").css("background-color", "red");
            $("#nortext").text("No(R)")
            $("#greentext").text("NC(PB)")

  
            endpointFunction(["acu"], red,"8");
            endpointFunction(["acd"], black,"8")
            endpoints["acu"].canvas.style.display = '';
            endpoints["acd"].canvas.style.display = '';
  
            $("#red").mouseover(() => {
              $("#red").attr("src", "images/red but4.png");
              $("#redtext").text("NO(PB)")
              $("#cnor").attr("src", "images/No(R).png");
              $("#cnortext").text("No(R)")
              $("#nor").attr("src", "images/No(R).png");
              $("#red").css("cursor","default");
              $("#light").css("background-color", "red");
              $("#rotatingImage").attr("src","images/fan1.png");
              $("#nortext").text("No(R)")
              const image = document.getElementById('rotatingImage');
              image.classList.remove('rotating');
              }).mouseout(() => {
                $("#red").attr("src", "images/red but4.png");
                $("#redtext").text("NO(PB)")
                $("#cnor").attr("src", "images/No(R).png");
                $("#cnortext").text("No(R)")
                $("#nor").attr("src", "images/No(R).png");
                $("#red").css("cursor","default");
                $("#light").css("background-color", "red");
                $("#rotatingImage").attr("src","images/fan1.png");
                $("#nortext").text("No(R)")
                const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
              });
              $("#green").mouseover(() => {
                $("#green").attr("src", "images/green but3.png");
                $("#greentext").text("NC(PB)")
                $("#cnor").attr("src", "images/No(R).png");
                $("#cnortext").text("No(R)")
                $("#nor").attr("src", "images/No(R).png");
                $("#red").css("cursor","default");
                $("#light").css("background-color", "red");
                $("#rotatingImage").attr("src","images/fan1.png");
                $("#nortext").text("No(R)")
                const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
                }).mouseout(() => {
                  $("#green").attr("src", "images/green but3.png");
                  $("#greentext").text("NC(PB)")
                  $("#cnor").attr("src", "images/No(R).png");
                  $("#cnortext").text("No(R)")
                  $("#nor").attr("src", "images/No(R).png");
                  $("#red").css("cursor","default");
                  $("#light").css("background-color", "red");
                  $("#rotatingImage").attr("src","images/fan1.png");
                  $("#nortext").text("No(R)")
                  const image = document.getElementById('rotatingImage');
                  image.classList.remove('rotating');
                });
              

  

        }else{
            acSlider = false;
            instance.deleteEndpoint(endpoints["acu"]);
            instance.deleteEndpoint(endpoints["acd"]);
  
            $("#dcload-power").attr("src", "images/s1.png");
            $("#dcload-control").attr("src", "images/s1.png");
  
            $("#lamp").attr("src","images/lamp off.png")
            $("#lamp").css("display",'inline')
            $("#rotatingImage").css("display", "none");
            $("#comp8").css("opacity",'1')
            $("#comp11").css("opacity",'1')

  
            //switches
            $("#dcload-power").css("display",'inline')
            $("#dcload-control").css("display", "inline");
            $("#nac").css("display",'none')
            $("#ndc").css("display", "none");
            $("#LoadName").text("DC Load")
            $("#LoadName").css("opacity", "1");
  
  
  
            $("#component6").attr("src","images/lamp off.png")
            $("#bulbtext").text("Lamp")
            $("#component6-b").text("Lamp")
            $(".fan-bulb-header").text("Lamp")
  
            const image = document.getElementById('rotatingImage');
            image.classList.remove('rotating');
  
            $("#dcload-power").click(()=>{

              $("#red").mouseover(() => {
                $("#lamp").attr("src", "images/lamp off.png");
                $("#red").attr("src", "images/red but4.png");
                $("#redtext").text("NO(PB)")
                $("#cnor").attr("src", "images/No(R).png");
                $("#cnortext").text("No(R)")
                $("#nor").attr("src", "images/No(R).png");
                $("#red").css("cursor","default");
                $("#light").css("background-color", "red");
                $("#lamp").attr("src", "images/lamp off.png");                 //
                $("#nortext").text("No(R)")
                const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
                }).mouseout(() => {
                  $("#lamp").attr("src", "images/lamp off.png");
                  $("#red").attr("src", "images/red but4.png");
                  $("#redtext").text("NO(PB)")
                  $("#cnor").attr("src", "images/No(R).png");
                  $("#cnortext").text("No(R)")
                  $("#nor").attr("src", "images/No(R).png");
                  $("#red").css("cursor","default");
                  $("#light").css("background-color", "red");
                  $("#lamp").attr("src", "images/lamp off.png");                       //
                  $("#nortext").text("No(R)")
                  const image = document.getElementById('rotatingImage');
                  image.classList.remove('rotating');
                });
                $("#green").mouseover(() => {
                  $("#lamp").attr("src", "images/lamp off.png");
                  $("#green").attr("src", "images/green but3.png");
                  $("#greentext").text("NC(PB)")
                  $("#cnor").attr("src", "images/No(R).png");
                  $("#cnortext").text("No(R)")
                  $("#nor").attr("src", "images/No(R).png");
                  $("#red").css("cursor","default");
                  $("#light").css("background-color", "red");
                  $("#lamp").attr("src", "images/lamp off.png");                        //
                  $("#nortext").text("No(R)")
                  const image = document.getElementById('rotatingImage');
                  image.classList.remove('rotating');
                  }).mouseout(() => {
                    $("#lamp").attr("src", "images/lamp off.png");
                    $("#green").attr("src", "images/green but3.png");
                    $("#greentext").text("NC(PB)")
                    $("#cnor").attr("src", "images/No(R).png");
                    $("#cnortext").text("No(R)")
                    $("#nor").attr("src", "images/No(R).png");
                    $("#red").css("cursor","default");
                    $("#light").css("background-color", "red");
                    $("#lamp").attr("src", "images/lamp off.png");                           //
                    $("#nortext").text("No(R)")
                    const image = document.getElementById('rotatingImage');
                    image.classList.remove('rotating');
                  });
          })
        
  
  
            $("#ac").css({
              "position":" absolute",
              "width":" 50%",
              "height":" 40%",
              "top":" 30%",
              "left": "0%",
              "opacity": "1"
            })
            $("#dcload-power").css({
              "width": "9%",
              "height":"12%",
              "top": "47%",
              "left":" 27%"
            })
  
            $("#acd").css("top",'51%')
            $("#acu").css("top",'51%')
            $("#acd").css("left",'19%')
            $("#acu").css("left",'14%')
            $("#comp8").css("opacity",'1')
            $("#comp9").css("opacity",'0.1')
            $("#dcload-power").css("opacity",'1')
            $("#actext").css("left"," 12%")
            $("#actext").css("top"," 60%")
  
            $("#ac").attr("src", "images/supply f2.png");
            $("#red").attr("src", "images/red but4.png");
            $("#green").attr("src", "images/green but3.png");
            $("#redtext").text("NO(PB)")
                $("#cnor").attr("src", "images/No(R).png");
                $("#cnortext").text("No(R)")
                $("#nor").attr("src", "images/No(R).png");
                $("#red").css("cursor","default");
                $("#light").css("background-color", "red");
                $("#nortext").text("No(R)")
                $("#greentext").text("NC(PB)")
            $("#actext").text("DC supply 12V")
  
            endpointFunction(["acu"], red,"8");
            endpointFunction(["acd"], black,"8")
  
            endpoints["acu"].canvas.style.display = '';
            endpoints["acd"].canvas.style.display = '';
  
            $("#red").mouseover(() => {
              $("#lamp").attr("src", "images/lamp off.png");
              $("#red").attr("src", "images/red but4.png");
              $("#redtext").text("NO(PB)")
              $("#cnor").attr("src", "images/No(R).png");
              $("#cnortext").text("No(R)")
              $("#nor").attr("src", "images/No(R).png");
              $("#red").css("cursor","default");
              $("#light").css("background-color", "red");
              $("#lamp").attr("src", "images/lamp off.png");                 //
              $("#nortext").text("No(R)")
              const image = document.getElementById('rotatingImage');
              image.classList.remove('rotating');
              }).mouseout(() => {
                $("#lamp").attr("src", "images/lamp off.png");
                $("#red").attr("src", "images/red but4.png");
                $("#redtext").text("NO(PB)")
                $("#cnor").attr("src", "images/No(R).png");
                $("#cnortext").text("No(R)")
                $("#nor").attr("src", "images/No(R).png");
                $("#red").css("cursor","default");
                $("#light").css("background-color", "red");
                $("#lamp").attr("src", "images/lamp off.png");                       //
                $("#nortext").text("No(R)")
                const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
              });
              $("#green").mouseover(() => {
                $("#lamp").attr("src", "images/lamp off.png");
                $("#green").attr("src", "images/green but3.png");
                $("#greentext").text("NC(PB)")
                $("#cnor").attr("src", "images/No(R).png");
                $("#cnortext").text("No(R)")
                $("#nor").attr("src", "images/No(R).png");
                $("#red").css("cursor","default");
                $("#light").css("background-color", "red");
                $("#lamp").attr("src", "images/lamp off.png");                        //
                $("#nortext").text("No(R)")
                const image = document.getElementById('rotatingImage');
                image.classList.remove('rotating');
                }).mouseout(() => {
                  $("#lamp").attr("src", "images/lamp off.png");
                  $("#green").attr("src", "images/green but3.png");
                  $("#greentext").text("NC(PB)")
                  $("#cnor").attr("src", "images/No(R).png");
                  $("#cnortext").text("No(R)")
                  $("#nor").attr("src", "images/No(R).png");
                  $("#red").css("cursor","default");
                  $("#light").css("background-color", "red");
                  $("#lamp").attr("src", "images/lamp off.png");                           //
                  $("#nortext").text("No(R)")
                  const image = document.getElementById('rotatingImage');
                  image.classList.remove('rotating');
                });
  
        }
    });


      
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
    ['comp1', 'comp4', 'comp8' , 'comp2', 'comp6', 'comp9'].forEach(function (id) {
      let component = document.getElementById(id);
      component.style.opacity = '1';
    });
    a = checkControl();                     // a=true pe reset button will not  work and we will mave to power circuit panel         
  });
}

function powerVerifyBtn() {
  $("#powerVerify").click(() => {
    ['comp1', 'comp4', 'comp8' , 'comp2', 'comp6', 'comp9'].forEach(function (id) {       //hiding control circuit components
      let component = document.getElementById(id);
      component.style.opacity = '1';
    });
    b = checkPower();                          //will call way function if true , if false power reset button will again work
    if (!b) {
      powerResetBtn();
    } else {
      way(b,false,false,false);
    }
  });
}

function controlResetBtn() {
  $("#controlReset").click(() => {                         //  a=false par reset button will work and delete old connections
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



    $("#cc").click(() => {                           //control circuit endpoints
      
      endpointFunction(["dcu"], red,"6",1)
      endpointFunction(["dcd"], black,"6",1)
      endpointFunction(["rd"], black,"6",1)
      endpointFunction(["redd"], black,"6",2)
      endpointFunction(["redu"], red,"6",2);
      endpointFunction(["ru"], red,"6",1);

      endpointFunction(["greenu"], red,"6",1)
      endpointFunction(["greend"], black,"6",1)

      endpointFunction(["cnoru"], red,"6",1)
      endpointFunction(["cnord"], black,"6",2)

      
      
      $("#comp1").css("opacity", "1");
      $("#comp4").css("opacity", "1");
      $("#comp8").css("opacity", "1");
      $("#comp11").css("opacity", "1");
      $("#comp2").css("opacity", "1");

        // Show only required components
        // ['comp1', 'comp4', 'comp11' ,'comp8'].forEach(function (id) {
        //     let component = document.getElementById(id);
        //     component.style.opacity = '1';
        // });
        // Hide other components
        ['comp6', 'comp9'].forEach(function (id) {
            document.getElementById(id).style.opacity = '0.1';

        });

      $('#comp1').click(()=>
        {
          $("#relay").attr("src", "images/relay img.png");
          $("#relaytext").text("4C/O Relay 12V DC ")
          $("#relay").css("opacity", "1");
          $("#light").css("opacity", "1");
          endpoints["ru"].canvas.style.display = '';              //will show endpoints on click
          endpoints["rd"].canvas.style.display = '';
        }
      );
      $('#comp4').click(()=>
        {
          $("#red").attr("src", "images/red but4.png");
          $("#red").css("opacity", "1");
          $("#redtext").text("NO(PB)")
          endpoints["redu"].canvas.style.display = '';
          endpoints["redd"].canvas.style.display = '';
        }
      );


      $('#comp11').click(()=>                                        //green (updates)
        {
          $("#green").attr("src", "images/green but3.png");
          $("#green").css("opacity", "1");
          $("#greentext").text("NC(PB)")
          endpoints["greenu"].canvas.style.display = '';
          endpoints["greend"].canvas.style.display = '';
        }
      );

      $('#comp2').click(()=>{
        $("#cnor").attr("src", "images/No(R).png");
        $("#cnortext").text("NO(R)")
    //    $(".pressNor").css("border","2px solid red")                     // for box around cnor
        //$("#cnoru").css("opacity","1")
        $("#cnortext").css("opacity","1")
        //$("#cnord").css("opacity","1")
        $("#cnor").css("opacity", "1");
    //    $(".pressNor").css("opacity","1")                               // for box around cnor
        endpoints["cnoru"].canvas.style.display = '';
        endpoints["cnord"].canvas.style.display = '';
      });




      $('#comp8').click(()=>
        {
          $("#dc").attr("src", "images/supply f2.png");
          $("#ndc").attr("src", "images/s1.png");
          $("#dctext").text("DC supply 12V")
          $("#dc").css("opacity", "1");
          $("#ndc").css("opacity",'1')
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

$('#comp2').mouseover(()=>
    {
      $('#component2').attr("src","images/no b.png")
      $('#component2-nor').text("Nc (R)")
    }
).mouseout(()=>{
  $('#component2').attr("src","images/nc b.png")
  $('#component2-nor').text("No(R)")
})

$('#comp2').mouseover(()=>
    {
      $('#component2').attr("src","images/nc b.png")
      $('#component2-nor').text("Nc (R)")
    }
).mouseout(()=>{
  $('#component2').attr("src","images/no b.png")
  $('#component2-nor').text("No(R)")
})

// Mouseover and mouseout events for component 4 (comp4)
$('#comp4').mouseover(() => {
  $('#component4').attr("src", "images/green but3.png");
  $('#component4-po').text("NO(PB)-Close");
}).mouseout(() => {
  $('#component4').attr("src", "images/red but4.png");
  $('#component4-po').text("NO(PB)-Open");
});

// Mouseover and mouseout events for component 11 (comp11)
$('#comp11').mouseover(() => {
  $('#component11').attr("src", "images/red but4.png");
  $('#component11-po').text("NC(PB)-Open");
}).mouseout(() => {
  $('#component11').attr("src", "images/green but3.png");
  $('#component11-po').text("NC(PB)-Close");
});



