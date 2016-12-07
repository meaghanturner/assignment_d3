
//JavaScript Document


(function() {
	"use strict";
	console.log("SEAF Fired");

	 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var data = this.responseText; //need to output it as a JSON file not as a string
     var data = JSON.parse(data);
     console.log(data);
     // for (var i = data.length - 1; i >= 0; i--) {
     // 	console.log(data[i])
     // 	data[i];
     // };
     dataa(data);

    }
  };
  xhttp.open("GET", "data.php", true);
  xhttp.send();


function dataa(data) {
	console.log(data);

var margin = {top: 20, right: 15, bottom: 60, left: 60}; 
var w = 960 - margin.left - margin.right;
var h = 800 - margin.top - margin.bottom;
  
  var xScale = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return d.whales_pos[0]; })])
            .range([0, w]);
  
  var yScale = d3.scaleLinear()
            .domain([0, d3.max(data, function(d) { return d.whales_years[0]; })])
            .range([h, 0]);


//Create Scatter Chart
var scatterChart = d3.select('#scatterPlot')
.append('svg:svg')
.attr('width', w + margin.left + margin.right)
.attr('height', h + margin.top + margin.bottom)
.attr('class','scatterChart')
.style('background', "rgb(251, 251, 251)");

var mainChart = scatterChart.append('g')
.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
  .attr('width', w)
  .attr('height', h)
  .attr('class', 'mainChart')   

var xAxis = d3.axisBottom()
     .scale(xScale);

  mainChart.append('g')
  .attr('transform', 'translate(0,' + h + ')')
  .attr('class', 'mainChart axis line')
  .call(xAxis)
  .style('fill', "black");


  var yAxis = d3.axisLeft()
    .scale(yScale);

    mainChart.append('g')
  .attr('transform', 'translate(0,0)')
  .attr('class', 'mainChart axis line')
  .call(yAxis)
 .style('fill', "black");

        

     var g = mainChart.append("svg:g"); 
    
    g.selectAll("scatter-dots")
      .data(data)
      .enter().append("svg:circle")
          .attr("cx", function (d)
           { return xScale(d.whales_pos[0]); } )
          .attr("cy", function (d) 
            { return yScale(d.whales_years[0]); } )
          .attr("r", 20)
          .style('fill', "#1e90ff");
        


}
    
})();
