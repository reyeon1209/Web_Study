d3.csv("https://reyeon1209.github.io/Web_Study/200613/data/mydata_ko.csv",
    function(error, data) {
        var dataSet = [];
    
        for (var i = 0; i < data.length; i++) {
		    dataSet.push(data[i]["상품A"]);
	    }
        // 요소가 데이터가 대응된 상태
        
        d3.select("#myGraph")
		  .selectAll("rect")
		  .data(dataSet)
		  .enter()	
		  .append("rect")	
		  })