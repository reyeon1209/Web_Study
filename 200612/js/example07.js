var dataSet = [300, 130, 50, 60, 240];

d3.select("#myGraph")
    .selectAll("rect")
    .data(dataSet)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", function(d, i) {
        return i * 25;
    })
    .attr("height", "20px")
    .attr("y", function(d, i) {
        return i * 25;
    })
    .attr("width", function(d, i) {
        return d + "px";
    })
    .on("click", function() {
        d3.select(this)             // 클릭한 요소 지정
            .style("fill", "cyan")  // 클릭하면 하늘색으로 채우기
    })