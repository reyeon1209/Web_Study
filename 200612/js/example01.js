var dataSet = [300, 130, 5, 60, 240];

d3.select("#myGraph")               // SVG element 중 id가 myGraph인 곳에
    .append("rect")                 // 사각형 추가
    .attr("x", 0)                   // x좌표는 0
    .attr("y", 0)                   // y좌표는 0
    .attr("width", dataSet[0])      // 데이터 셋으로 가로 길이 설정
    .attr("height", "20px")         // 높이는 20px