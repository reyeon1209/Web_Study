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
    .attr("width", "0px")       // 초기 가로 0px로
    .transition()               // 애니메이션 효과 (부드럽게 움직임)
    .delay(function(d, i) {
        return i * 500;         // 다음 막대를 0.5초 뒤에 그리기
    })
    // .delay(500) 이렇게 주면 모든 막대 동시에 그려짐
    .duration(2500)             // 2.5초에 걸쳐 막대 그리기 애니메이션화
    .attr("width", function(d, i) {
        return d + "px";
    })

d3.select("#updateButton").on("click", function() {
    for (var i = 0; i < dataSet.length; i++) {
        dataSet[i] = Math.floor(Math.random()*320);
    }

    d3.select("#myGraph")
        .selectAll("rect")
        .data(dataSet)
        .transition()
        .attr("width", function(d, i) {
            return d + "px";
        })
})