function plotData() {
  if (
    values["AC1"]["volt"] != 0 &&
    values["AC1"]["freq"] != 0 &&
    values["R2"]["value"] != 0 &&
    values["GTP2"]["fire"] != 0 &&
    values["GTP3"]["fire"] != 0 &&
    values["I1"]["value"] != 0
  ) {
    const wave_forms = generatedData();
    var graph = document.getElementById("graph-new");
    graph.innerHTML = "";
    graph.style.height = "832px";
    var graph_element = document.createElement("div");
    graph_element.id = "sine_input";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "sine_input",
      [
        {
          x: wave_forms[1][1],
          y: wave_forms[1][0],
          mode: "lines",
          name: "V<sub>INP</sub>",
          marker: {
            color: "Orange",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],

      {
        title: "<b>" + values["VM3"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 *
              (parseInt(wave_forms[0][0]) +
                1 +
                0.1 * parseInt(wave_forms[0][0])),
            parseInt(wave_forms[0][0]) + 1 + 0.1 * parseInt(wave_forms[0][0]),
          ],
          title: "<b>Amplitude(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "gate_pulse";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "gate_pulse",
      [
        {
          x: wave_forms[2][1],
          y: wave_forms[2][0],
          mode: "lines",
          name: "V<sub>GP1</sub>",
          marker: {
            color: "Red",
          },
        },
        {
          x: wave_forms[3][1],
          y: wave_forms[3][0],
          mode: "lines",
          name: "V<sub>GP2</sub>",
          marker: {
            color: "Blue",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM2"]["name"].toUpperCase(),
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [-1, 1.5],
          title: "<b>Gate Pulse</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "load_voltage";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "load_voltage",
      [
        {
          x: wave_forms[4][1],
          y: wave_forms[4][0],
          mode: "lines",
          name: "V<sub>L</sub> ",
          marker: {
            color: "Green",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM4"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 *
              (parseInt(wave_forms[0][0]) +
                1 +
                0.1 * parseInt(wave_forms[0][0])),
            parseInt(wave_forms[0][0]) + 1 + 0.1 * parseInt(wave_forms[0][0]),
          ],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
    graph_element = document.createElement("div");
    graph_element.id = "load_current";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "load_current",
      [
        {
          x: wave_forms[5][1],
          y: wave_forms[5][0],
          mode: "lines",
          name: "I<sub>L</sub> ",
          marker: {
            color: "Blue",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["A1"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 *
              (parseInt(wave_forms[0][1]) +
                (1 / 10) * parseInt(wave_forms[0][1]) +
                1),
            parseInt(wave_forms[0][1]) +
              (1 / 10) * parseInt(wave_forms[0][1]) +
              1,
          ],
          title: "<b>Current(A)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );

    graph_element = document.createElement("div");
    graph_element.id = "thyristor_voltage";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "thyristor_voltage",
      [
        {
          x: wave_forms[6][1],
          y: wave_forms[6][0],
          mode: "lines",
          name: "V<sub>T1<sub>",
          marker: {
            color: "#ff7000",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM1"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 *
              (parseInt(values["AC1"]["volt"]) * 2.2 +
                1 +
                0.1 * parseInt(values["AC1"]["volt"]) * 2.2),
            parseInt(values["AC1"]["volt"]) * 2.2 +
              1 +
              0.1 * 0.1 * parseInt(values["AC1"]["volt"]) * 2.2,
          ],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );

    graph_element = document.createElement("div");
    graph_element.id = "thyristor_voltage2";
    graph_element.classList.add("graph-style");
    graph.append(graph_element);
    Plotly.newPlot(
      "thyristor_voltage2",
      [
        {
          x: wave_forms[7][1],
          y: wave_forms[7][0],
          mode: "lines",
          name: "<sub>VT2</sub>",
          marker: {
            color: "Blue",
          },
        },
        {
          x: [0],
          y: [0],
          mode: "lines",
          name: "",
          marker: {
            color: "White",
          },
        },
      ],
      {
        title: "<b>" + values["VM5"]["name"].toUpperCase() + "</b>",
        xaxis: { range: [0, 0.061], title: "<b>Time(s)</b>", fixedrange: true },
        yaxis: {
          range: [
            -1 *
              (parseInt(values["AC1"]["volt"]) * 2.2 +
                1 +
                0.1 * parseInt(values["AC1"]["volt"]) * 2.2),
            parseInt(values["AC1"]["volt"]) * 2.2 +
              1 +
              0.1 * 0.1 * parseInt(values["AC1"]["volt"]) * 2.2,
          ],
          title: "<b>Voltage(V)</b>",
          fixedrange: true,
        },
        margin: { t: 35 },
      },
      { displayModeBar: false }
    );
  }
}
function generatedData() {
  const sineamp = parseInt(values["AC1"]["volt"]);
  const freq = parseInt(values["AC1"]["freq"]);
  const sta1 = parseInt(values["GTP2"]["freq"]);
  const end1 = parseInt(values["GTP2"]["fire"]);
  const sta2 = parseInt(values["GTP3"]["freq"]);
  const end2 = parseInt(values["GTP3"]["fire"]);
  const resistance = parseInt(values["R2"]["value"]);
  const inductance = parseInt(values["I1"]["value"]) * 0.001;
  var timep = 1 / freq;
  var half_timep = timep / 2;
  var starting1 = (timep / 360) * sta1;
  var ending1 = (timep / 360) * end1;
  var starting2 = (timep / 360) * sta2;
  var ending2 = (timep / 360) * end2;
  var phi = Math.atan((2 * Math.PI * freq * inductance) / resistance);
  var vrms = 0,
    irms = 0;
  var z = Math.sqrt(
    resistance * resistance +
      2 * Math.PI * freq * inductance * (2 * Math.PI * freq * inductance)
  );
  var sine1, sine2, i, beta1, beta2;
  if (starting1 <= half_timep) {
    var first_cycle_flag = true;
  } else {
    var first_cycle_flag = false;
  }
  if (ending2 <= half_timep) {
    var second_cycle_flag = false;
  } else {
    var second_cycle_flag = true;
  }

  var flag;
  if (first_cycle_flag) {
    for (let x = 0; x <= timep; x += 0.00001) {
      if (x >= starting1) {
        i =
          (sineamp / z) * Math.sin(2 * Math.PI * freq * x - phi) -
          (sineamp / z) *
            Math.sin(sta1 * (Math.PI / 180) - phi) *
            Math.exp(
              -1 *
                (resistance / (2 * Math.PI * freq * inductance)) *
                (2 * Math.PI * freq * x - sta1 * (Math.PI / 180))
            );
        if (i > 0) {
          flag = true;
        }
        if (flag) {
          if (i <= 0) {
            beta1 = (x / timep) * 360;
            flag = false;
            break;
          }
        }
      }
    }
  }
  if (second_cycle_flag) {
    for (let x = 0; x <= timep; x += 0.00001) {
      if (x > starting2 - half_timep && starting2 - half_timep >= 0) {
        i =
          (sineamp / z) * Math.sin(2 * Math.PI * freq * x - phi) -
          (sineamp / z) *
            Math.sin(sta2 * (Math.PI / 180) - Math.PI - phi) *
            Math.exp(
              -1 *
                (resistance / (2 * Math.PI * freq * inductance)) *
                (2 * Math.PI * freq * x - (sta2 * (Math.PI / 180) - Math.PI))
            );
        if (i > 0) {
          flag = true;
        }
        if (flag) {
          if (i <= 0) {
            beta2 = (x / timep) * 360;
            flag = false;
            break;
          }
        }
      }
    }
  }

  var save_starting2 = starting2;
  if (second_cycle_flag) {
    if (starting2 < half_timep) {
      starting2 = half_timep;
    }
  }
  var inductor_resistance = 2 * Math.PI * freq * inductance;
  var input_voltage = [],
    load_current = [],
    load_voltage = [],
    thy1 = [],
    thy2 = [],
    gate1 = [],
    gate2 = [],
    xval = [],
    extra_current = 0,
    extra_voltage = 0,
    first_cycle_extra_current_flag = false,
    second_cycle_extra_current_flag = true,
    max_current = 0,
    tim = 0;

  if (first_cycle_flag && second_cycle_flag) {
    for (let x = 0; x <= 0.06; x += 0.00001) {
      sine1 = sineamp * Math.sin(2 * Math.PI * freq * x);
      sine2 = sineamp * Math.sin(2 * Math.PI * freq * x - Math.PI);
      input_voltage.push(sine1);
      xval.push(x);
      if (x >= save_starting2 + timep) {
        save_starting2 += timep;
        ending2 += timep;
      }

      if (x >= starting1 + timep) {
        starting1 += timep;
        starting2 += timep;
        ending1 += timep;

        tim += timep;
      }
      if (starting1 <= x && x <= ending1) {
        gate1.push(1);
      } else {
        gate1.push(0);
      }
      if (save_starting2 <= x && x <= ending2) {
        gate2.push(1);
      } else {
        gate2.push(0);
      }
      if (x >= starting1 && x < starting2) {
        if (first_cycle_extra_current_flag) {
          i =
            (sineamp / z) *
              Math.sin(2 * Math.PI * freq * (x - half_timep - tim) - phi) -
            ((sineamp + extra_voltage) / z) *
              Math.sin(sta2 * (Math.PI / 180) - Math.PI - phi) *
              Math.exp(
                -1 *
                  (resistance / (2 * Math.PI * freq * inductance)) *
                  (2 * Math.PI * freq * (x - half_timep - tim) -
                    (sta2 * (Math.PI / 180) - Math.PI))
              );
          if (i + extra_current > 0) {
            extra_current = extra_current + 0;
            extra_voltage = 0;
          } else {
            extra_current = 0;
            extra_voltage = 0;
          }
          first_cycle_extra_current_flag = false;
          second_cycle_extra_current_flag = true;
        }
        i =
          (sineamp / z) * Math.sin(2 * Math.PI * freq * (x - tim) - phi) -
          ((sineamp + extra_voltage) / z) *
            Math.sin(sta1 * (Math.PI / 180) - phi) *
            Math.exp(
              -1 *
                (resistance / (2 * Math.PI * freq * inductance)) *
                (2 * Math.PI * freq * (x - tim) - sta1 * (Math.PI / 180))
            );
        if (i + extra_current > max_current) {
          max_current = i + extra_current;
        }
        if (i + extra_current > 0) {
          load_current.push(i + extra_current);
          vrms = vrms + sine1 * sine1;
          irms = irms + i * i;
          load_voltage.push(sine1);
          thy1.push(0);
          thy2.push(sine2-sine1);
        } else {
          extra_current = 0;
          extra_voltage = 0;
          load_voltage.push(0);
          load_current.push(0);
          thy1.push(sine1);
          thy2.push(sine2);
        }
      } else if (x > starting2) {
        if (second_cycle_extra_current_flag) {
          i =
            (sineamp / z) * Math.sin(2 * Math.PI * freq * (x - tim) - phi) -
            ((sineamp + extra_voltage) / z) *
              Math.sin(sta1 * (Math.PI / 180) - phi) *
              Math.exp(
                -1 *
                  (resistance / (2 * Math.PI * freq * inductance)) *
                  (2 * Math.PI * freq * (x - tim) - sta1 * (Math.PI / 180))
              );
          if (i + extra_current > 0) {
            extra_current = extra_current;
            extra_voltage = 0;
          } else {
            extra_current = 0;
            extra_voltage = 0;
          }
          first_cycle_extra_current_flag = true;
          second_cycle_extra_current_flag = false;
        }
        i =
          (sineamp / z) *
            Math.sin(2 * Math.PI * freq * (x - half_timep - tim) - phi) -
          ((sineamp + extra_voltage) / z) *
            Math.sin(sta2 * (Math.PI / 180) - Math.PI - phi) *
            Math.exp(
              -1 *
                (resistance / (2 * Math.PI * freq * inductance)) *
                (2 * Math.PI * freq * (x - half_timep - tim) -
                  (sta2 * (Math.PI / 180) - Math.PI))
            );
        if (i + extra_current > max_current) {
          max_current = i + extra_current;
        }
        if (i + extra_current > 0) {
          load_current.push(i + extra_current);
          load_voltage.push(sine2);
          vrms = vrms + sine2 * sine2;
          irms = irms + i * i;
          thy1.push(sine1 - sine2);
          thy2.push(0);
        } else {
          load_current.push(0);
          load_voltage.push(0);
          thy1.push(sine1);
          thy2.push(sine2);
          extra_current = 0;
          extra_voltage = 0;
        }
      } else {
        load_voltage.push(0);
        load_current.push(0);
        thy1.push(sine1);
        thy2.push(sine2);
        extra_current = 0;
        extra_voltage = 0;
      }
    }
  } else if (first_cycle_flag && second_cycle_flag) {
    var time_p = timep;

    for (let x = 0; x <= 0.06; x += 0.00001) {
      sine1 = sineamp * Math.sin(2 * Math.PI * freq * x);
      sine2 = sineamp * Math.sin(2 * Math.PI * freq * x - Math.PI);
      input_voltage.push(sine1);
      xval.push(x);
      if (x > time_p) {
        starting1 += timep;
        save_starting2 += timep;
        ending1 += timep;
        ending2 += timep;
        tim += timep;
        time_p += timep;
      }
      if (starting1 <= x && x <= ending1) {
        gate1.push(1);
      } else {
        gate1.push(0);
      }
      if (save_starting2 <= x && x <= ending2) {
        gate2.push(1);
      } else {
        gate2.push(0);
      }
      if (x >= starting1) {
        i =
          (sineamp / z) * Math.sin(2 * Math.PI * freq * (x - tim) - phi) -
          (sineamp / z) *
            Math.sin(sta1 * (Math.PI / 180) - phi) *
            Math.exp(
              -1 *
                (resistance / (2 * Math.PI * freq * inductance)) *
                (2 * Math.PI * freq * (x - tim) - sta1 * (Math.PI / 180))
            );
        if (i > max_current) {
          max_current = i;
        }
        if (i > 0) {
          load_current.push(i);
          vrms = vrms + sine1 * sine1;
          irms = irms + i * i;
          load_voltage.push(sine1);
          thy1.push(0);
          thy2.push(sine2 * 1.96);
        } else {
          extra_current = 0;
          extra_voltage = 0;
          load_voltage.push(0);
          load_current.push(0);
          thy1.push(sine1 / 1);
          thy2.push(sine2 / 1);
        }
      } else {
        load_voltage.push(0);
        load_current.push(0);
        thy1.push(sine1 / 1.1);
        thy2.push(sine2 / 1.1);
        extra_current = 0;
        extra_voltage = 0;
      }
    }
  } else if (first_cycle_flag && !second_cycle_flag) {
    var time_p = timep;

    for (let x = 0; x <= 0.06; x += 0.00001) {
      sine1 = sineamp * Math.sin(2 * Math.PI * freq * x);
      sine2 = sineamp * Math.sin(2 * Math.PI * freq * x - Math.PI);
      input_voltage.push(sine1);
      xval.push(x);
      if (x > time_p) {
        starting1 += timep;
        save_starting2 += timep;
        ending1 += timep;
        ending2 += timep;
        tim += timep;
        time_p += timep;
      }
      if (starting1 <= x && x <= ending1) {
        gate1.push(1);
      } else {
        gate1.push(0);
      }
      if (save_starting2 <= x && x <= ending2) {
        gate2.push(1);
      } else {
        gate2.push(0);
      }
      if (x >= starting1) {
        i =
          (sineamp / z) * Math.sin(2 * Math.PI * freq * (x - tim) - phi) -
          (sineamp / z) *
            Math.sin(sta1 * (Math.PI / 180) - phi) *
            Math.exp(
              -1 *
                (resistance / (2 * Math.PI * freq * inductance)) *
                (2 * Math.PI * freq * (x - tim) - sta1 * (Math.PI / 180))
            );
        if (i > max_current) {
          max_current = i;
        }
        if (i > 0) {
          load_current.push(i);
          vrms = vrms + sine1 * sine1;
          irms = irms + i * i;
          load_voltage.push(sine1);
          thy1.push(0);
          thy2.push(sine2-sine1);
        } else {
          extra_current = 0;
          extra_voltage = 0;
          load_voltage.push(0);
          load_current.push(0);
          thy1.push(sine1);
          thy2.push(sine2);
        }
      } else {
        load_voltage.push(0);
        load_current.push(0);
        thy1.push(sine1);
        thy2.push(sine2);
        extra_current = 0;
        extra_voltage = 0;
      }
    }
  } else if (!first_cycle_flag && second_cycle_flag) {
    for (let x = 0; x <= 0.06; x += 0.00001) {
      sine1 = sineamp * Math.sin(2 * Math.PI * freq * x);
      sine2 = sineamp * Math.sin(2 * Math.PI * freq * x - Math.PI);
      input_voltage.push(sine1);
      xval.push(x);

      if (x >= starting2 + timep) {
        starting1 += timep;
        starting2 += timep;
        ending1 += timep;
        ending2 += timep;
        save_starting2 += timep;
        tim += timep;
      }
      if (starting1 <= x && x <= ending1) {
        gate1.push(1);
      } else {
        gate1.push(0);
      }
      if (save_starting2 <= x && x <= ending2) {
        gate2.push(1);
      } else {
        gate2.push(0);
      }
      if (x >= starting2) {
        i =
          (sineamp / z) *
            Math.sin(2 * Math.PI * freq * (x - half_timep - tim) - phi) -
          ((sineamp + extra_voltage) / z) *
            Math.sin(sta2 * (Math.PI / 180) - Math.PI - phi) *
            Math.exp(
              -1 *
                (resistance / (2 * Math.PI * freq * inductance)) *
                (2 * Math.PI * freq * (x - half_timep - tim) -
                  (sta2 * (Math.PI / 180) - Math.PI))
            );
        if (i + extra_current > max_current) {
          max_current = i + extra_current;
        }
        if (i + extra_current > 0) {
          load_current.push(i + extra_current);
          load_voltage.push(sine2);
          vrms = vrms + sine2 * sine2;
          irms = irms + i * i;
          thy1.push(sine1);
          thy2.push(0);
        } else {
          load_current.push(0);
          load_voltage.push(0);
          thy1.push(sine1 / 2);
          thy2.push(sine2 / 2);
          extra_current = 0;
          extra_voltage = 0;
        }
      } else {
        load_voltage.push(0);
        load_current.push(0);
        thy1.push(sine1 / 2);
        thy2.push(sine2 / 2);
        extra_current = 0;
        extra_voltage = 0;
      }
    }
  } else {
    var timp = timep;
    for (let x = 0; x <= 0.06; x += 0.00001) {
      sine1 = sineamp * Math.sin(2 * Math.PI * freq * x);
      sine2 = sineamp * Math.sin(2 * Math.PI * freq * x - Math.PI);
      input_voltage.push(sine1);
      xval.push(x);
      if (x >= timp) {
        starting1 += timep;
        starting2 += timep;
        ending1 += timep;
        ending2 += timep;
        save_starting2 += timep;
        tim += timep;
        timp += timep;
      }
      if (starting1 <= x && x <= ending1) {
        gate1.push(1);
      } else {
        gate1.push(0);
      }
      if (save_starting2 <= x && x <= ending2) {
        gate2.push(1);
      } else {
        gate2.push(0);
      }
      load_voltage.push(0);
      load_current.push(0);
      thy1.push(sine1);
      thy2.push(sine2);
    }
  }
  var vavg =
    (sineamp / Math.PI) *
    (Math.cos(sta1 * (Math.PI / 180)) - Math.cos(beta1 * (Math.PI / 180)));
  var iavg = vavg / z;
  vrms = Math.sqrt(vrms / input_voltage.length);
  irms = Math.sqrt(irms / input_voltage.length);

  iavg = iavg * 100;
  vavg = vavg * 100;
  vrms = vrms * 100;
  irms = irms * 100;
  vavg = parseInt(vavg);
  iavg = parseInt(iavg);
  vrms = parseInt(vrms);
  irms = parseInt(irms);
  values["vavg"] = vavg / 100;
  values["iavg"] = iavg / 100;
  values["vrms"] = vrms / 100;
  values["irms"] = irms / 100;
  return [
    [sineamp, max_current],
    [input_voltage, xval],
    [gate1, xval],
    [gate2, xval],
    [load_voltage, xval],
    [load_current, xval],
    [thy1, xval],
    [thy2, xval],
  ];
}
