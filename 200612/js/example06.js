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
    .attr("width", "0px")       // 최초 0px로 지정
    .transition()               // 애니메이션 효과
    .delay(function(d, i) {
        return i * 500;         // 다음 막대를 0.5초 뒤에 그리기
    })
    .duration(2500)             // 2.5초에 걸쳐 막대 그리기 애니메이션화
    .attr("width", function(d, i) {
        return d + "px";
    })

d3.select("#updateButton").on("click", function() {
    for (var i = 0; i < dataSet.length; i++) {
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