var dataSet = [300, 130, 5, 60, 240];

d3.select("#myGraph")               // SVG 요소 지정
    .append("rect")                 // SVG 사각형 생성
    .attr("x", 0)                   // x좌표 설정
    .attr("y", 0)                   // y좌표 설정
    .attr("width", dataSet[0])      // 데이터 셋 기반 넓이 설정
    .attr("height", "20px")         // 높이 설정