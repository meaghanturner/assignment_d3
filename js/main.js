// JavaScript Document

(function() {
	"use strict";
	console.log("SEAF Fired");
	

	
	var xAxis= d3.axisBottom()
	.scale(xScale)
	
//y line
	var yValue = function(d) {return d["Years"]};

	var yScale=d3.scaleLinear()
	.range([0, height]);

	
	var yAxis=d3.axisLeft()
	.scale(yScale)
	.tickFormat(formatPercent);




	
	d3.select('#scatterPlot')
	.append('svg')
	.attr('width', width + margin.left + margin.right)
	.attr('height',height + margin.top + margin.bottom)
	.style('background', '#efefef')
	.append("g")
	.attr("transform", "translate("+margin.left+","+margin.top+")")


d3.json("whaledata.php", function (error data) {
	data.forEach(function(d){
		
	})
})
})();
