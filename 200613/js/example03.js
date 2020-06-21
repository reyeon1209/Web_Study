d3.select("#myBar")
    .attr("x", "10")
    .attr("y", "50")
    .attr("width", "200px")
    .attr("height", "30px")
    .transition()       // 애니메이션 효과
    .duration(3000)     // 3초 동안
    .attr("width", "50px")  // width가 50으로 변화