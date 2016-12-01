// JavaScript Document

(function() {
	"use strict";
	console.log("SEAF Fired");
	
<<<<<<< HEAD
	var height = 525;
	var width = 890;
	var margin= {top:30, right:20, bottom: 30, left:50};
	var formatPercent = d3.format(".0%")
//x line
	var xValue=function(d){return d.Whales};
	
	var xScale=d3.scaleLinear()
	.range([0, width]);
	
=======

>>>>>>> meaghan-branch-edits
	
	
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
