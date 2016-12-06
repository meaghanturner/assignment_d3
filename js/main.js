// / JavaScript Document

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

var width = 900; //"100%";
var height = 300;

var margin = {top: 40, right: 40, bottom: 40, left: 50};

// var x = d3.scaleLinear()
//       .domain([0, d3.max(data)]) //start and end point of data 
//       .range ([0, w]);


//marco code
var xScale = d3.scaleLinear()
            .range([0, width]);
  
  var yScale = d3.scaleLinear()
            .range([height, 0]);
          
  var xAxis = d3.axisBottom()
    .scale(xScale);

  var yAxis = d3.axisLeft()
    .scale(yScale)  
 


//end of marc

//Create SVG 
//var svg = 
d3.select('#scatterPlot')
	.append('svg')
	.attr('width', width + margin.left + margin.right)
	.attr('height', height + margin.top + margin.bottom)
  .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")   
  
	.style('background', "#efefef");

//create circles for scatter
svg.selectAll('circle')
	.data(data)
	.enter()
	.append('circle')
	.attr("cx",  function(d) 
    {return d.whales_type;})
  
  .attr("cy",  function(d) 
    {return d.whales_years;})

  .attr("r", function(d) 
    {return d.whales_years/3;})

	.style("fill", "#00aa88");

}

var svg = d3.select("svg");

      svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + (height+margin.top) + ")")
            .attr("class", "x axis")    
            .call(xAxis);

      svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .attr("class", "y axis")
            .call(yAxis);
                
    svg.append("text")
            .attr("transform", 
        "translate(" + (( width + margin.left + margin.right)/2) + ", 50)")
            .attr("text-anchor", "middle")  
            .text("bar chart of awesomeness");      
})();



