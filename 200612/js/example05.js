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
    .attr("width", function(d, i) {
        return d + "px";
    })
    .attr("height", "20px")

d3.select("#updateButton").on("click", function() {
    for (var i = 0; i < dataSet.length; i++) {  // 0~320 랜덤 값 생성
        dataSet[i] = Math.floor(Math.random() * 320);
    }

    d3.select("#myGraph")
        .selectAll("rect")
        .data(dataSet)
        .transition()       // 변환 표시
        .attr("width", function(d, i) {
            return d + "px";
        })
})