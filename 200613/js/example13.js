d3.json("https://reyeon1209.github.io/Web_Study/200613/data/mydata.json",
    function(error, data) {
        var dataSet = [];

        for (var i = 0; i < data.length; i++) {
            dataSet.push(data[i].sales[0]); // sales의 최초 데이터만 추출
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
                return i * 25;
            })
        })