// csv 한글 2
d3.csv("https://reyeon1209.github.io/Web_Study/200613/data/mydata_ko.csv",
    function(error, data) {
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
            .attr("x", 0)
            .attr("y", function(d, i) {
                return i * 25;
            })
            .attr("width", function(d, i) {
                return d + "px";
            })
            .attr("height", "20px")
        })