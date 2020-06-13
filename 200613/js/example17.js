d3.select("#myGraph")
    .selectAll("rect")
    .data([0, 0, 0, 0, 0])
    .enter()
    .append("rect")
    .datum(function() {
        return Math.random();
    })