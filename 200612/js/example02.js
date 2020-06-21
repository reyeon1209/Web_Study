var dataSet = [300, 130, 5, 60, 240];

// dataSet을 가로 길이로 하는 막대들 그리는 비효율적 코드
d3.select("#myGraph")
    .append("rect")
    .attr("x", 0)
    .attr("y", 25)
    .attr("width", dataSet[0])
    .attr("height", "20px")

d3.select("#myGraph")
    .append("rect")
    .attr("x", 0)
    .attr("y", 50)
    .attr("width", dataSet[1])
    .attr("height", "20px")

d3.select("#myGraph")
    .append("rect")
    .attr("x", 0)
    .attr("y", 75)
    .attr("width", dataSet[2])
    .attr("height", "20px")

d3.select("#myGraph")
    .append("rect")
    .attr("x", 0)
    .attr("y", 100)
    .attr("width", dataSet[3])
    .attr("height", "20px")

d3.select("#myGraph")
    .append("rect")
    .attr("x", 0)
    .attr("y", 125)
    .attr("width", dataSet[4])
    .attr("height", "20px")