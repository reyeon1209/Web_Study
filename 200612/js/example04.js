var dataSet1 = [300, 130, 5, 60, 240];
var dataSet2= [20, 230, 150, 10, 20];

d3.select("#myGraph")
    .selectAll("rect")
    .data(dataSet1)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", function(d, i) {
        return i * 25;
    })
    .attr("width", function(d, i) {
        return d + "px";
    })
    .attr("height", "20px")

d3.select("#updateButton")
    .on("click", function() {
        d3.select("#myGraph")
            .selectAll("rect")
            .data(dataSet2)
            .attr("width", function(d, i) {
                return d + "px";
            })
    })