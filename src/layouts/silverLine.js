// https://codepen.io/illucent/pen/LyzvLq
var chartDiv = document.getElementById("silver_line");
var svg = d3.select(chartDiv).append("svg");

function redraw()
{
  // Extract the width and height that was computed by CSS.
        var width = chartDiv.clientWidth;
        var height = chartDiv.clientHeight;
        // Use the extracted size to set the size of an SVG element.
        svg
          .attr("width", width)
          .attr("height", height);
        // Draw an X to show that the size is correct.
        var silverLine = svg.selectAll("line").data([
          { x1: 0, y1: height, x2: width, y2: 0 }
        ]);
        silverLine
          .enter().append("line")
            .style("stroke-width", 1)
            .style("stroke-opacity", 1)
            .style("stroke", "#c0c0c0")
					  .merge(silverLine)
            .attr("x1", function (d) { return d.x1; })
            .attr("y1", function (d) { return d.y1; })
            .attr("x2", function (d) { return d.x2; })
            .attr("y2", function (d) { return d.y2; });
      }
      // Draw for the first time to initialize.
      redraw();
      // Redraw based on the new size whenever the browser window is resized.
      window.addEventListener("resize", redraw);
