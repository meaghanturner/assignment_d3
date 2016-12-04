// / JavaScript Document

// (function() {
// 	"use strict";
// 	console.log("SEAF Fired");

// 	 var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//      var data = this.responseText;
//      // console.log(data);
//      dataa(data);

//     }
//   };
//   xhttp.open("GET", "data.php", true);
//   xhttp.send();


// function dataa(data) {
// 	console.log(data);

// var height = 525;
// var width = 700;
// var margin= {top:30, right:20, bottom: 30, left:50};



	// d3.select('#scatterPlot')
	// .append('svg')
	// .attr('width', width + margin.left + margin.right)
	// .attr('height',height + margin.top + margin.bottom)
	// .style('background', '#efefef')
	// .append("g")
	// .attr("transform", "translate("+margin.left+","+margin.top+")")

// }
var data = [1, 2, 3, 4, 5];

var scale = d3.scale.linear()
	.domain([1,5])
	.range([0, 200]);

var svg = d3.select("body")
	.append("svg")
	.attr(width, height);

var rects = svg.selectAll("rect").data(data);
	rects.enter()
		.append("rect")
		.attr("x", scale)
		.attr("y", 50)
		.attr("width", 50)
		.attr("height", 50)

	.style("fill": "blue");

//removing / thow away 
	rects.exit().remove();
})
})();

