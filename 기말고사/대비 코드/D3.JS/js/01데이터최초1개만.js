d3.selectAll("button").on("click", function() {
    var csvFile = this.getAttribute("data-src");

    d3.csv(csvFile, function(error, data) {
        var dataSet = [];
    
        for (var i = 0; i < data.length; i++) {
		    dataSet.push(data[i]["상품A"]);
	    }

        d3.select("#myGraph")
		  .selectAll("rect")
		  .data(dataSet)
		  .enter()	
		  .append("rect")	
		  .attr("class", "bar")	
		  .attr("width", function(d, i) {	
				return d;	
		  })
		  .attr("height", 20)
		  .attr("x", 0)	
		  .attr("y", function(d, i) {	
				return i * 25	
		  })
    });
})
