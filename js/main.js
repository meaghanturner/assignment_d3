// JavaScript Document

(function() {
	"use strict";
	console.log("SEAF Fired");

	 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var data = this.responseText;
     // console.log(data);
     dataa(data);

    }
  };
  xhttp.open("GET", "data.php", true);
  xhttp.send();


function dataa(data) {
	console.log(data);

var height = 525;
var width = 700;
var margin= {top:30, right:20, bottom: 30, left:50};


	d3.select('#scatterPlot')
	.append('svg')
	.attr('width', width + margin.left + margin.right)
	.attr('height',height + margin.top + margin.bottom)
	.style('background', '#efefef')
	.append("g")
	.attr("transform", "translate("+margin.left+","+margin.top+")")

}



})();

