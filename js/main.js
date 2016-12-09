
//JavaScript Document


(function() {
	"use strict";
	console.log("SEAF Fired");

	 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var data = this.responseText; //need to output it as a JSON file not as a string
     var data = JSON.parse(data);//json parse makes it as objects
     dataa(data);

    }
  };
  xhttp.open("GET", "data.php", true);
  xhttp.send();


function dataa(data) {
	console.log(data);

var margin = {top: 20, right: 15, bottom: 60, left: 60}; 
var w = 960 
var h = 500 
  
  var xScale = d3.scaleBand()
            .domain(data.map(function(d) { return d.whales_type; }))
            .range([0, w]);


  
  var yScale = d3.scaleLinear()
            .domain([40, d3.min(data, function(d) { return d.whales_years; })])
            .range([h, 0]);



//Create Scatter Chart
var scatterChart = d3.select('#scatterPlot')
.append('svg')
.attr('width', w + margin.left + margin.right)
.attr('height', h + margin.top + margin.bottom)
.attr('class','scatterChart');




var mainChart = scatterChart.append('g')
.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
  .attr('width', w)
  .attr('height', h)
  .attr('class', 'mainChart');

var xAxis = d3.axisBottom()
     .scale(xScale);

    

  mainChart.append('g')
  .attr('transform', 'translate(0,' + h + ')')
  .attr('class', 'mainChartLineX')
  .call(xAxis);

  

  var yAxis = d3.axisLeft()
    .scale(yScale);

  mainChart.append('g')
  .attr('transform', 'translate(0,0)')
  .attr('class', 'mainChartLineY')
  .call(yAxis);

        

  var g = mainChart.append('g'); 
    g.selectAll("dots")
      .data(data)
      .enter()
      .append("circle")
      .transition()
      .attr("y", 250) 
      .duration(6500)
     

      .attr("cx", function (d)
      {return xScale(d.whales_type); } )
      .attr("cy", function (d) 
      { return yScale(d.whales_years); } )
      .attr("r", 10)
      .style('fill', "#1e90ff")
      .attr('transform', 'translate(56)');
      
/// Y AND X AXIS LABELS
   g.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", -46)
    .attr("x", -200)
    .attr("transform", "rotate(-90)")
    .text("Average Years");


   g.append("text")
    .attr("class", "x label")
    .attr("x", 417)
    .attr("y", 557)
    .text("Types of Whales");


        

 //TOOL TIP       

  var div = d3.select('#scatterPlot')
     .append("div")
     .attr("class","tooltip")
     .style("opacity", 0);
    d3.selectAll('circle')
       .on("mouseover",function(d){
      

      div.transition()
      .duration(200)
      .style("opacity",1);
      div.html(
        "<div id='thumbnail'><span>" + d.whales_type+ "</span><img src='"+d.whales_thumbs+"'/></div")
      .style("left",(d3.event.pageX-167)+"px")
      .style("top", h - 300 -d + "px");

        d3.select(this)
        .transition()
        .duration(500)
        .attr('r',20)
        .style('opacity', .5)})
       
      .on("mouseout", function(d){
        div.transition()
        .duration(500)
        .style("opacity", 0);

        d3.select(this)
        .transition()
        .duration(500)
        .attr('r',10)
      
        .style("opacity",1)
        .style('fill','bffbf1')});



   


}
    
})();
