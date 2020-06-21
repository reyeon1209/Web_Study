// csv 한글 2
d3.csv("https://reyeon1209.github.io/Web_Study/200613/data/mydata_ko.csv")
    .row(function(d) {
        return {
            item1 : d["상품A"],
            item2 : d["상품B"],
            item3 : d["상품C"]
        }
    })
    .get(function(error, data) {
        var dataSet = [];

        for (var i = 0; i < data.length; i++) {
            dataSet.push(data[i].item1);
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