d3.select("#myBar")
    .attr("x", "10px")
    .attr("y", "50px")
    .attr("width", "200px")
    .attr("height", "30px")
    .transition()
    .duration(3000)     // 3초간 변화(애니메이션 효과)
    .attr("width", "50px")