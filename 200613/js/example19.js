d3.selectAll("button").on("click", function() {
    var csvFile = this.getAttribute("data-src");
    var barElements;

    d3.csv(csvFile, function(error, data) {
        var dataSet = [];
    
        for (var i = 0; i < data.length; i++) {
		    dataSet.push(data[i]["상품A"]);
        }
        
        // 그래프 그리기
        barElements = d3.select("#myGraph")
		                .selectAll("rect")
                        .data(dataSet)
                        
        // 데이터가 추가될 때
        barElements.enter()	
                    .append("rect")	
                    .attr("class", "bar")	
                    .attr("x", 0)	
                    .attr("y", function(d, i) {	
                            return i * 25	
                    })
                    .attr("width", function(d, i) {	
                            return d + "px";	
                    })
                    .attr("height", "20px")
                    
        // 데이터가 갱신될 때
        barElements.attr("width", function(d, i) {
            return d + "px";
        })
    });
})
