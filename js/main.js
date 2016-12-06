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

var w = 900; //"100%";
var h = 300;

var x = d3.scaleLinear()
      .domain([0, d3.max(data)]) //start and end point of data 
      .range ([0, w]);


//Create SVG 
var svg = d3.select('#scatterPlot')
	.append('svg')
	.attr('width', w)
	.attr('height', h)
  
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


})();
