var count = 0;
var correct_connections =
[

  ['VM1L', 'THY1L'],
  ['VM1R', 'THY1R'],
  ['THY1RB', 'GTP2R'],
  ['GTP2R', 'VM2T'],
  ['VM2B', 'gnd2'],
  ['TF3RU', 'THY1L'],
  ['THY1R', 'A1R'],
  ['VM3T', 'AC1T'],
  ['VM3B', 'AC1B'],
  ['AC1T', 'TF1U'],
  ['AC1B', 'TF2L'],
  ['TC4RM', 'R2T'],
  ['A1R', 'THY2R'],
  ['R2T', 'VM4L'],
  ['R2B', 'INDL'],
  ['A1L', 'INDR'],
  ['TC5RL', 'THY2L'],
  ['VM5L', 'THY2L'],
  ['VM5R', 'THY2R'],
  ['THY2RB', 'GTP3R'],
  ['VM6T', 'GTP3R'],
  ['VM6B', 'gnd3'],
  ['VM4R', 'INDR'],
  
  
];

var voltagemids = ["VM6-back", "VM5-back", "VM4-back", "VM3-back","VM2-back","VM1-back"];
var thyids = ["THY2-back","THY1-back"];
var amids = ["ammeter-back"];
var gtpids = ["GTP3-back","GTP2-back"];
var gndids = ["GND3-back","GND2-back"];
var acids = ["AC1-back"];
var rids = ["R2-back"];
var transformerds = ["transformer-back"];
var inductorids = ["IND-back"];
var values = {
  R2: {
    name: "Resistor",
    value: 0,
    type: "Resistance: ",
    unit: " Ω" ,
  },
  AC1: {
    name: "AC Source",
    volt: 0,
    freq: 0,
    type1: "Voltage: ",
    type2: "Frequency: ",
    unitfreq: " Hz",
    unit: "V",
  },

  VM1: {
    name: "Thyristor Voltage 1",
  },
  VM5: {
    name: "Thyristor Voltage 2",
  },
  VM2: {
    name: "Firing Pulse",
  },
  GND2: {
    name: "GND1",
  },
  GND3: {
    name: "GND2",
  },
  A1: {
    name: "Load Current",
  },
  TF: {
    name: "3-W Transformer",
  },
  THY1:{name:"Thyristor 1",},
  THY2:{name:"Thyristor 2",},
  
  GTP2: {
    name: "Gate Pulse 1",
    freq: 0,
    fire: 0,
    type1: "Frequency: ",
    type2: "Fire Angle: ",
    unitfreq: "\u00B0 ",
    unit: "\u00B0",
  },
  GTP3: {
    name: "Gate Pulse 2",
    freq: 0,
    fire: 0,
    type1: "Frequency: ",
    type2: "Fire Angle: ",
    unitfreq: "\u00B0  ",
    unit: "\u00B0",
  },
  I1: {
    name: "Inductor",
    value: 0,
    type: "Inductance: ",
    unit: "mH",
  },

 

  VM3: { name: "Input Voltage" },
  VM4: { name: "Load Voltage" },
  VM2: { name: "Gate pulse" },
  VM6: { name: "Gate pulse" },
};
var endpoints = {};
var user_connection = [];
var wrong_connection = [];
var endpoints_display = [];
var correct_connections_flag = false;

var instance = jsPlumb.getInstance({
  ConnectionsDetachable: false,
  Container: "body",
});
instance.bind("ready", () => {
  $("#symbolpalette .ele-img").draggable({
    helper: "clone",
    containment: "body",
    appendTo: "#diagram",
  });
  $("#diagram").droppable({
    drop: (event, ui) => {
      if ($(ui.helper).hasClass("resistor-sym")) {
        var a = rids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("thy-sym")) {
        var a = thyids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("ac-sym")) {
        var a = acids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("gate-sym")) {
        var a = gtpids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("volt-sym")) {
        var a = voltagemids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("gnd-sym")) {
        var a = gndids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        }
      } else if ($(ui.helper).hasClass("am-sym")) {
        var a = amids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("transformer-sym")) {
        var a = transformerds.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("inductor-sym")) {
        var a = inductorids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      }
    },
  });
  //if (component.hasClass("jtk-connector"))
  function createParticularEnd(element_name) {
    var stokwid = "3.5";
    if (element_name == "VM1") {
      var VM1L = instance.addEndpoint("VM1L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
       
      });
      endpoints['VM1L']=VM1L;
     
      var VM1R = instance.addEndpoint("VM1R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints['VM1R']=VM1R;
    }
    if (element_name == "VM2") {
      var VM2T = instance.addEndpoint("VM2T", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints['VM2T']=VM2T;
  
      var VM2B = instance.addEndpoint("VM2B", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
  
      });endpoints['VM2B']=VM2B;
    }
    if (element_name == "VM3") {
       var VM3T = instance.addEndpoint("VM3T", {
      anchor: ["Top"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints['VM3T']=VM3T;

    var VM3B = instance.addEndpoint("VM3B", {
      anchor: ["Bottom"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints['VM3B']=VM3B;
    }
    if (element_name == "VM4") {
      var VM4L = instance.addEndpoint("VM4L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints['VM4L']=VM4L;
  
      var VM4R = instance.addEndpoint("VM4R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints['VM4R']=VM4R;
    }
    if (element_name == "THY1") {
         
    var THY1R = instance.addEndpoint("THY1R", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
     
    });endpoints["THY1R"]=THY1R;
     
    var THY1RB = instance.addEndpoint("THY1RB", {
      anchor: ["Bottom"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
     
    });endpoints["THY1RB"]=THY1RB;
   
    var THY1L = instance.addEndpoint("THY1L", {
      anchor: ["Left"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["THY1L"]=THY1L;
    }
    if (element_name == "ammeter") {
     
    var A1L = instance.addEndpoint("A1L", {
      anchor: ["Left"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["A1L"]=A1L;

    var A1R = instance.addEndpoint("A1R", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["A1R"]=A1R;
    }
    if (element_name == "GTP2") {
      var GTP2R = instance.addEndpoint("GTP2R", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["GTP2R"]=GTP2R;
    }
    if(element_name =="GTP3"){
      var GTP3R = instance.addEndpoint("GTP3R", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["GTP3R"]=GTP3R;
    }
    if (element_name == "GND2") { 
    var gnd2 = instance.addEndpoint("gnd2", {
      anchor: ["Left"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["gnd2"]=gnd2;
    }
    if (element_name == "AC1") {
      var AC1T = instance.addEndpoint("AC1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["AC1T"]=AC1T;
  
      var AC1B = instance.addEndpoint("AC1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["AC1B"]=AC1B;
    }
    if (element_name == "R2") {
      var R2T = instance.addEndpoint("R2T", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["R2T"]=R2T;
  
      var R2B = instance.addEndpoint("R2B", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["R2B"]=R2B;
    }
    if(element_name == "VM5"){
      var VM5L = instance.addEndpoint("VM5L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["VM5L"]=VM5L;
  
      var VM5R = instance.addEndpoint("VM5R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["VM5R"]=VM5R;
    }
    if(element_name =="VM6"){
      var VM6T= instance.addEndpoint("VM6T", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["VM6T"]=VM6T;
  
      var VM6B = instance.addEndpoint("VM6B", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["VM6B"]=VM6B;
    }
    if(element_name == "THY2"){
      var THY2R = instance.addEndpoint("THY2R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["THY2R"]=THY2R;
  
      var THY2L = instance.addEndpoint("THY2L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["THY2L"]=THY2L;
  
      var THY2RB = instance.addEndpoint("THY2RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["THY2RB"]=THY2RB;
    }
    if(element_name== "GND3"){
      var gnd3 = instance.addEndpoint("gnd3", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["gnd3"]=gnd3;
    }
    if(element_name == "transformer"){
    var TF1U = instance.addEndpoint("TF1U", {
      anchor: ["Top"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["TF1U"]=TF1U;

    var TF2L = instance.addEndpoint("TF2L", {
      anchor: ["Bottom"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["TF2L"]=TF2L;

    var TF3RU = instance.addEndpoint("TF3RU", {
      anchor: ["Top"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["TF3RU"]=TF3RU;

    var TC4RM = instance.addEndpoint("TC4RM", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["TC4RM"]=TC4RM;

    var TC5RL = instance.addEndpoint("TC5RL", {
      anchor: ["Bottom"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });endpoints["TC5RL"]=TC5RL;
    }
    if(element_name=="IND"){
        var INDL = instance.addEndpoint("INDL", {
          anchor: ["Left"],
          isSource: true,
          isTarget: true,
          connector: "Flowchart",
          maxConnections: 1,
          connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
          paintStyle: { fillStyle: "red" },
        });endpoints["INDL"]=INDL;
    
        var INDR = instance.addEndpoint("INDR", {
          anchor: ["Right"],
          isSource: true,
          isTarget: true,
          connector: "Flowchart",
          maxConnections: 2,
          connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
          paintStyle: { fillStyle: "red" },
        });endpoints["INDR"]=INDR;
      }
  }

  function createEnd() {
    var stokwid = "3.5";
    if (endpoints_display.indexOf("VM1") !== -1){
        var VM1L = instance.addEndpoint("VM1L", {
            anchor: ["Left"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 1,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
           
          });
        endpoints['VM1L']=VM1L;
         
        var VM1R = instance.addEndpoint("VM1R", {
            anchor: ["Right"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 1,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
          });
        endpoints['VM1R']=VM1R;

    }
    if (endpoints_display.indexOf("VM2") !== -1){
        var VM2T = instance.addEndpoint("VM2T", {
            anchor: ["Left"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 1,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
          });
          endpoints['VM2T']=VM2T;
      
          var VM2B = instance.addEndpoint("VM2B", {
            anchor: ["Right"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 1,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
      
          });endpoints['VM2B']=VM2B;

    }
    if (endpoints_display.indexOf("VM3") !== -1){
        var VM3T = instance.addEndpoint("VM3T", {
            anchor: ["Top"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 1,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
          });
          endpoints['VM3T']=VM3T;
      
          var VM3B = instance.addEndpoint("VM3B", {
            anchor: ["Bottom"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 1,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
          });
          endpoints['VM3B']=VM3B;
    }
    if (endpoints_display.indexOf("VM4") !== -1){
        var VM4L = instance.addEndpoint("VM4L", {
            anchor: ["Left"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 1,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
          });endpoints['VM4L']=VM4L;
      
          var VM4R = instance.addEndpoint("VM4R", {
            anchor: ["Right"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 1,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
          });endpoints['VM4R']=VM4R;
    }
    if (endpoints_display.indexOf("VM5") !== -1){
        
    var VM5L = instance.addEndpoint("VM5L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["VM5L"]=VM5L;
  
      var VM5R = instance.addEndpoint("VM5R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["VM5R"]=VM5R;
    }
    if (endpoints_display.indexOf("VM6") !== -1){
        var VM6T= instance.addEndpoint("VM6T", {
            anchor: ["Left"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 1,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
          });endpoints["VM6T"]=VM6T;
      
          var VM6B = instance.addEndpoint("VM6B", {
            anchor: ["Right"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 1,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
          });endpoints["VM6B"]=VM6B;
    }
    if (endpoints_display.indexOf("AC1") !== -1){
        
    var AC1T = instance.addEndpoint("AC1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["AC1T"]=AC1T;
  
      var AC1B = instance.addEndpoint("AC1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["AC1B"]=AC1B;
  
    }
    if (endpoints_display.indexOf("ammeter") !== -1){
        
    var A1L = instance.addEndpoint("A1L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["A1L"]=A1L;
  
      var A1R = instance.addEndpoint("A1R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["A1R"]=A1R;
    }
    if (endpoints_display.indexOf("GND2") !== -1){
    var gnd2 = instance.addEndpoint("gnd2", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["gnd2"]=gnd2;
  
    }
    if (endpoints_display.indexOf("GND3") !== -1){
        var gnd3 = instance.addEndpoint("gnd3", {
            anchor: ["Left"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 1,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
          });endpoints["gnd3"]=gnd3;
    }
    if (endpoints_display.indexOf("GTP2") !== -1){
        var GTP2R = instance.addEndpoint("GTP2R", {
            anchor: ["Center"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 2,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
          });endpoints["GTP2R"]=GTP2R;
    }
    if (endpoints_display.indexOf("GTP3") !== -1){
    var GTP3R = instance.addEndpoint("GTP3R", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["GTP3R"]=GTP3R;
    }
    if (endpoints_display.indexOf("transformer") !== -1){
        
    var TF1U = instance.addEndpoint("TF1U", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["TF1U"]=TF1U;
  
      var TF2L = instance.addEndpoint("TF2L", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["TF2L"]=TF2L;
  
      var TF3RU = instance.addEndpoint("TF3RU", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["TF3RU"]=TF3RU;
  
      var TC4RM = instance.addEndpoint("TC4RM", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["TC4RM"]=TC4RM;
  
      var TC5RL = instance.addEndpoint("TC5RL", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["TC5RL"]=TC5RL;
    }
    if (endpoints_display.indexOf("THY1") !== -1){
        var THY1R = instance.addEndpoint("THY1R", {
            anchor: ["Right"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 2,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
           
          });endpoints["THY1R"]=THY1R;
           
          var THY1RB = instance.addEndpoint("THY1RB", {
            anchor: ["Bottom"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 1,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
           
          });endpoints["THY1RB"]=THY1RB;
         
          var THY1L = instance.addEndpoint("THY1L", {
            anchor: ["Left"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 2,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
          });endpoints["THY1L"]=THY1L;
    }
    if (endpoints_display.indexOf("THY2") !== -1){
        var THY2R = instance.addEndpoint("THY2R", {
            anchor: ["Right"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 2,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
          });endpoints["THY2R"]=THY2R;
      
          var THY2L = instance.addEndpoint("THY2L", {
            anchor: ["Left"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 2,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
          });endpoints["THY2L"]=THY2L;
      
          var THY2RB = instance.addEndpoint("THY2RB", {
            anchor: ["Bottom"],
            isSource: true,
            isTarget: true,
            connector: "Flowchart",
            maxConnections: 1,
            connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
            paintStyle: { fillStyle: "red" },
          });endpoints["THY2RB"]=THY2RB;
    }
    if (endpoints_display.indexOf("R2") !== -1){   
    var R2T = instance.addEndpoint("R2T", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["R2T"]=R2T;
  
      var R2B = instance.addEndpoint("R2B", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });endpoints["R2B"]=R2B;
    }
    if(endpoints_display.indexOf("IND")!==-1){
        var INDL = instance.addEndpoint("INDL", {
          anchor: ["Left"],
          isSource: true,
          isTarget: true,
          connector: "Flowchart",
          maxConnections: 1,
          connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
          paintStyle: { fillStyle: "red" },
        });endpoints["INDL"]=INDL;
    
        var INDR = instance.addEndpoint("INDR", {
          anchor: ["Right"],
          isSource: true,
          isTarget: true,
          connector: "Flowchart",
          maxConnections: 2,
          connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
          paintStyle: { fillStyle: "red" },
        });endpoints["INDR"]=INDR;
      }

  }

  window.addEventListener("resize", () => {
    // instance.deleteEveryEndpoint();
    instance.repaintEverything();

    // createEnd();
    
    // var per_connect = user_connection;
    // if(!correct_connections_flag){
    //   for (var i of per_connect) {
    //     instance.connect({
    //       source: endpoints[i[0]],
    //       target: endpoints[i[1]],
    //     });
    //     user_connection.pop();
    //   }
    // }
   if(correct_connections_flag){
      plotData();
    }
  });

  instance.bind("connection", (conn, event) => {
    var flag = true;
    let eg1 = [String(conn.sourceId), String(conn.targetId)];

    for (var ele of correct_connections) {
      if (
        (ele[0] == eg1[0] && ele[1] == eg1[1]) ||
        (ele[0] == eg1[1] && ele[1] == eg1[0])
      ) {
        flag = false;

        user_connection.push(eg1);

        break;
      }
    }
    if (flag) {
      conn.connection._jsPlumb.paintStyleInUse.stroke = "red";
      wrong_connection.push(eg1);
      openPopup("new-img/404-error.png", "Wrong Connection", "30px");
    }
    
  });
  function detach(a) {
    instance.deleteConnection(a);
  }
  instance.bind("click", function (conn) {
    let eg1 = [String(conn.sourceId), String(conn.targetId)];
    if(!correct_connections_flag){

    for (var ele of correct_connections) {
      if (
        (ele[0] == eg1[0] && ele[1] == eg1[1]) ||
        (ele[0] == eg1[1] && ele[1] == eg1[0])
      ) {
        user_connection.pop(eg1);
        break;
      }
    }
    for (var ele of wrong_connection) {
      if (
        (ele[0] == eg1[0] && ele[1] == eg1[1]) ||
        (ele[0] == eg1[1] && ele[1] == eg1[0])
      ) {
        wrong_connection.pop(eg1);
        break;
      }
    }
      
      instance.deleteConnection(conn);
    }

    return false;
  });
  $("body").on("contextmenu","#components",(event)=>{
    event.preventDefault();
  })

  // context-menu for resistor
  $("body").on("contextmenu", "#diagram .resistor", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

   if (correct_connections_flag) {
    $(
      '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
        window.selectedControl +
        '"></button></div></div></div><form action="#" onsubmit="DcSubmited(' +
        "'" +
        window.selectedControl +
        "'" +
        ')"><div><label for="name-' +
        window.selectedControl +
        '">Name:</label><input  type="text" maxlength="4" class="set-input-name" id="name-' +
        window.selectedControl +
        '" style="border-radius: 20px; padding:2px;"   placeholder="  ' +
        values[window.selectedControl]["name"] +
        '" onchange="changeName(' +
        "'" +
        window.selectedControl +
        "'" +
        ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
        window.selectedControl +
        '">Resistance:</label><input type="number" class="set-input" placeholder=" ' +
        values[window.selectedControl]["value"] +
        ' &Omega;" min="1" max="100"  id="value-' +
        window.selectedControl +
        '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
    )
      .appendTo("body")
      .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
   }else{
    $(
      '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
        window.selectedControl +
        '"></button></div></div></div><form action="#" onsubmit="DcSubmited(' +
        "'" +
        window.selectedControl +
        "'" +
        ')"><div><label for="name-' +
        window.selectedControl +
        '">Name:</label><input  type="text" maxlength="4" class="set-input-name" id="name-' +
        window.selectedControl +
        '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
        values[window.selectedControl]["name"] +
        '" onchange="changeName(' +
        "'" +
        window.selectedControl +
        "'" +
        ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
        window.selectedControl +
        '">Resistance:</label><input type="number" class="set-input" placeholder="  ' +
        values[window.selectedControl]["value"] +
        ' &Omega;" min="1" max="100"  disabled id="value-' +
        window.selectedControl +
        '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
    )
      .appendTo("body")
      .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
   }
   

    // context menu for capacitor

    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });
   //for inductor
   $("body").on("contextmenu", "#diagram .inductorsource", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dLSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" maxlength="5" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Inductance:</label><input type="number" class="set-input" placeholder=" ' +
          values[window.selectedControl]["value"] +
          ' mH" min="1" max="100"  id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dLSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" maxlength="5" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Inductance:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["value"] +
          ' mH" min="1" max="100"  disabled id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });
 
  //for acsource
  $("body").on("contextmenu", "#diagram .acsource", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");
    
    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="acSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label style="color:white;" for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text"maxlength="6" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Amplitude:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["volt"] +
          ' Volt" min="1" max="350"  id="value-volt-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          ' Hz" min="1" max="60"  id="value-freq-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }else{
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="acSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" maxlength="6" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Amplitude:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["volt"] +
          ' Volt" min="1" max="100" disabled id="value-volt-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          ' Hz" min="0" max="60" disabled id="value-freq-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

$("body").on("contextmenu", "#diagram .other", function (event) {
  event.preventDefault();
  $("div.custom-menu").remove();
  window.selectedControl = $(this).attr("id");

  $(
    '<div class="custom-menu"><div class="name-element"><div style="display: flex; justify-content: end;position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn"></button></div><label for="name-' +
      window.selectedControl +
      '">Name:</label><input type="text" maxlength="5" id="name-' +
      window.selectedControl +
      '" class="set-input-name" placeholder="   ' +
      values[window.selectedControl]["name"] +
      '" onchange="changeName(' +
      "'" +
      window.selectedControl +
      "'" +
      ',this.value)"/><div style="display: flex; justify-content: end; padding-right: 13px;"><div><button class="submit set-value-btn" style="border-radius: 20px">Set Name</button></div></div>'
  )
    .appendTo("body")
    .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
  $(".submit").bind("click", function (event) {
    $("div.custom-menu").remove();
  });
});
$("body").on("contextmenu", "#diagram .other2", function (event) {
  event.preventDefault();
  $("div.custom-menu").remove();
  window.selectedControl = $(this).attr("id");

  $(
    '<div class="custom-menu"><div class="name-element"><div style="display: flex; justify-content: end;position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn"></button></div><label for="name-' +
      window.selectedControl +
      '">Name:</label><input type="text" maxlength="12" id="name-' +
      window.selectedControl +
      '" class="set-input-name" placeholder="   ' +
      values[window.selectedControl]["name"] +
      '" onchange="changeName(' +
      "'" +
      window.selectedControl +
      "'" +
      ',this.value)"/><div style="display: flex; justify-content: end; padding-right: 13px;"><div><button class="submit set-value-btn" style="border-radius: 20px">Set Name</button></div></div>'
  )
    .appendTo("body")
    .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
  $(".submit").bind("click", function (event) {
    $("div.custom-menu").remove();
  });
});
$("body").on("contextmenu", "#diagram .other3", function (event) {
  event.preventDefault();
  $("div.custom-menu").remove();
  window.selectedControl = $(this).attr("id");

  $(
    '<div class="custom-menu"><div class="name-element"><div style="display: flex; justify-content: end;position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn"></button></div><label for="name-' +
      window.selectedControl +
      '">Name:</label><input type="text" maxlength="7" id="name-' +
      window.selectedControl +
      '" class="set-input-name" placeholder="   ' +
      values[window.selectedControl]["name"] +
      '" onchange="changeName(' +
      "'" +
      window.selectedControl +
      "'" +
      ',this.value)"/><div style="display: flex; justify-content: end; padding-right: 13px;"><div><button class="submit set-value-btn" style="border-radius: 20px">Set Name</button></div></div>'
  )
    .appendTo("body")
    .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
  $(".submit").bind("click", function (event) {
    $("div.custom-menu").remove();
  });
});

  // contextmenu for gatepulse
  $("body").on("contextmenu", "#diagram .gatepulse", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu" style="width:220px;"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;   width: 165px;"  maxlength="6"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Firing angle start:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          '\u00B0 " min="1" max="180"  id="value-freq-' +
          window.selectedControl +
          "" +
          '"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-fire-' +
          +window.selectedControl +
          '">Firing angle end:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["fire"] +
          '\u00B0" min="1" max="180" style="    position: relative;left: 6px;"  id="value-fire-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px;width: 165px; padding:2px;" maxlength="6"   placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/><div    class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          +window.selectedControl +
          '">Firing angle start:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          ' &deg;" min="1" max="180" disabled   id="value-freq-' +
          window.selectedControl +
          '" /> </div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-fire-' +
          +window.selectedControl +
          '">Firing angle end:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["fire"] +
          ' &deg;" min="1" max="180" disabled  style="position: relative;left: 5px;"  id="value-fire-' +
          window.selectedControl +
          '" /> </div> <div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

  $("body").on("contextmenu", "#diagram .gatepulse2", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu" style="width:220px;"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom:2px; ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;   width: 165px;"  maxlength="6"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Firing angle start:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          '\u00B0 " min="1" max="360"  id="value-freq-' +
          window.selectedControl +
          "" +
          '"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-fire-' +
          +window.selectedControl +
          '">Firing angle end:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["fire"] +
          '\u00B0" min="1" max="360" style="    position: relative;left: 6px;"  id="value-fire-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px;width: 165px; padding:2px;" maxlength="6"   placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/><div    class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          +window.selectedControl +
          '">Firing angle start:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          ' &deg;" min="0" max="180" disabled   id="value-freq-' +
          window.selectedControl +
          '" /> </div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-fire-' +
          +window.selectedControl +
          '">Firing angle end:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["fire"] +
          ' &deg;" min="0" max="180" disabled  style="position: relative;left: 5px;"  id="value-fire-' +
          window.selectedControl +
          '" /> </div> <div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });


});

function dLSubmited(name) {
  var a = document.getElementById("value-" + name).value;
  if (a != "") {
    new_reading = true;
    values[name]["value"] = a;
    var ele = name + "-value";
    new_reading = true;
    $("#" + ele).text(values[name]["value"] + values[name]["unit"]);
  }
  document.getElementById("submit-" + name).click();

  if (correct_connections_flag) {
    plotData();
  }
  return false;
}

function vlotEnter(no, value) {
  values[no]["volt"] = value;
  var ele = no + "-volt";
  $("#" + ele).text(value + " volt");
  if (correct_connections_flag) {
    plotData();
  }
}
function freqEnter(no, value) {
  values[no]["freq"] = value;
  var ele = no + "-freq";
  $("#" + ele).text(value + " Hz");
  if (correct_connections_flag) {
    plotData();
  }
}

function changeName(name, value) {
  values[name]["name"] = value.toUpperCase();
  var ele = name + "-name";
  $("#" + ele).text(values[name]["name"]);
  if (correct_connections_flag) {
    plotData();
  }
}

function changeValue(no, value) {
  values[no]["value"] = value;
  var ele = no + "-value";
  $("#" + ele).text(value + values[no]["unit"]);
}
function dcSubmited(name) {
  var a = parseInt(document.getElementById("value-freq-" + name).value);
  var fire = parseInt(document.getElementById("value-fire-" + name).value);
  var ele;
  if (!Number.isNaN(a) && !Number.isNaN(fire)) {
    if (a >= fire) {
      openPopup(
        "new-img/404-warning.png",
        "Firing angle should be in increasing order",
        ""
      );
    } else {
      new_reading = true;
      values[name]["fire"] = fire;
      ele = name + "-fire";
      $("#" + ele).text(values[name]["fire"] + values[name]["unit"]);

      // Check if the gate pulse is part of a connected pair
      var connectedGatePulse = getConnectedGatePulse(name);
      if (connectedGatePulse) {
        values[connectedGatePulse]["fire"] = fire;
        $("#value-fire-" + connectedGatePulse).val(fire);
        $("#" + connectedGatePulse + "-fire").text(
          values[connectedGatePulse]["fire"] +
            values[connectedGatePulse]["unit"]
        );
      }
      values[name]["freq"] = a;
      ele = name + "-freq";
      $("#" + ele).text(values[name]["freq"] + values[name]["unitfreq"]);

      // Check if the gate pulse is part of a connected pair
      var connectedGatePulse = getConnectedGatePulse(name);
      if (connectedGatePulse) {
        values[connectedGatePulse]["freq"] = a;
        $("#value-freq-" + connectedGatePulse).val(a);
        $("#" + connectedGatePulse + "-freq").text(
          values[connectedGatePulse]["freq"] +
            values[connectedGatePulse]["unitfreq"]
        );
      }
    }
  } else {
    if (!Number.isNaN(fire)) {
      if (values[name]["freq"] == 0) {
        openPopup("new-img/404-warning.png", "Starting angle is Empty", "28px");
      } else if (fire <= values[name]["freq"]) {
        openPopup(
          "new-img/404-warning.png",
          "Firing angle should be in increasing order",
          ""
        );
      } else {
        new_reading = true;
        values[name]["fire"] = fire;
        ele = name + "-fire";
        $("#" + ele).text(values[name]["fire"] + values[name]["unit"]);

        // Check if the gate pulse is part of a connected pair
        var connectedGatePulse = getConnectedGatePulse(name);
        if (connectedGatePulse) {
          values[connectedGatePulse]["fire"] = fire;
          $("#value-fire-" + connectedGatePulse).val(fire);
          $("#" + connectedGatePulse + "-fire").text(
            values[connectedGatePulse]["fire"] +
              values[connectedGatePulse]["unit"]
          );
        }
      }
    }

    if (!Number.isNaN(a)) {
      if (values[name]["fire"] == 0) {
        openPopup("new-img/404-warning.png", "Ending angle is Empty", "28px");
      } else if (a >= values[name]["fire"]) {
        openPopup(
          "new-img/404-warning.png",
          "Firing angle should be in increasing order",
          "23px"
        );
      } else {
        new_reading = true;
        values[name]["freq"] = a;
        ele = name + "-freq";
        $("#" + ele).text(values[name]["freq"] + values[name]["unitfreq"]);

        // Check if the gate pulse is part of a connected pair
        var connectedGatePulse = getConnectedGatePulse(name);
        if (connectedGatePulse) {
          values[connectedGatePulse]["freq"] = a;
          $("#value-freq-" + connectedGatePulse).val(a);
          $("#" + connectedGatePulse + "-freq").text(
            values[connectedGatePulse]["freq"] +
              values[connectedGatePulse]["unitfreq"]
          );
        }
      }
    }
  }

  document.getElementById("submit-" + name).click();

  if (correct_connections_flag) {
    plotData();
  }
  return false;
}
function getConnectedGatePulse(name) {
  var connectedPairs = [
    ["GTP2", ""],
    ["GTP3", ""],
  ];

  // the connected pair that contains the given gate pulse name
  var connectedPair = connectedPairs.find((pair) => pair.includes(name));

  if (connectedPair) {
    var connectedGatePulse = connectedPair.find(
      (gatePulse) => gatePulse !== name
    );
    return connectedGatePulse;
  }

  return null;
}

function acSubmited(name) {
  var volt = document.getElementById("value-volt-" + name).value;
  var ele;
  if (volt != "") {
    values[name]["volt"] = volt;
    ele = name + "-volt";
    $("#" + ele).text(values[name]["volt"] + values[name]['unit']);
    new_reading=true;
  }
  var freq = document.getElementById("value-freq-" + name).value;
  if (freq != "") {
    values[name]["freq"] = freq;
    ele = name + "-freq";new_reading=true;
    $("#" + ele).text(values[name]["freq"] + values[name]["unitfreq"]);
  }
  document.getElementById("submit-" + name).click();
  if (correct_connections_flag) {
    plotData();
  }
}
function DcSubmited(name) {
  var a = document.getElementById("value-" + name).value;
  if (a != "") {
    new_reading = true;
    values[name]["value"] = a;
    var ele = name + "-value";
    new_reading = true;
    $("#" + ele).text(values[name]["value"] + values[name]["unit"]);
  }
  document.getElementById("submit-" + name).click();

  if (correct_connections_flag) {
    plotData();
  }
  return false;
}
function instchange() {
  document.getElementById("inst").classList.toggle("inst-display");
}

$(document).ready(function () {
  $("#data").on("click", function () {
    $("#readings").show();
  });
});
document.getElementById("check1").addEventListener("click", () => {
  if (wrong_connection.length == 0) {
    if (user_connection.length < 23) {
      openPopup(
        "new-img/404-warning.png",
        "Please make all the connections",
        "28px"
      );
    } else {
      openPopup(
        "new-img/404-tick.png",
        "Well Done! All Connections are Connected",
        "23px"
      );
      console.log(user_connection.length )

      correct_connections_flag = true;
    }
  } else {
    openPopup(
      "new-img/404-warning.png",
      "Wrong connection present in the circuit",
      "23px"
    );
  
  }
});
var count = 1;
var new_reading=true;
function showreadings() {
  if (correct_connections_flag) {
    if (
      values["AC1"]["volt"] != 0 &&
      values["AC1"]["freq"] != 0 &&
      values["R2"]["value"] != 0 &&
      values["GTP2"]["fire"] != 0 &&
      values["GTP3"]["fire"] != 0 
    ){

    if (new_reading){

    
    if (count<11) {
      document.getElementById("Taken_reading").style.display = "block";
      var a = document.getElementById("tab");
      var b = a.innerHTML;
      var str =
        "<tr><td>" +
        count +
        "</td><td>" +
        values['vrms']+
        "</td><td>" +
        values["irms"] +
        "</td><td>" +
        values['vavg'] +
        "</td><td>"+
        values["iavg"]+
        "</td></tr>";
      a.innerHTML = b + str;
      count = count + 1;
      new_reading=false;
    }
    else{
      openPopup(
        "new-img/404-warning.png",
        "You can only add 10 readings in the table",
        "23px"
      );
    }}
  }}
}

