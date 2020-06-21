var dataSet = [300, 130, 50, 60, 240];

d3.select("#myGraph")                   // SVG Element 중 id가 myGraph인 곳
    .selectAll("rect")                  // 교체/추가할 대상이 될 element 선택
    .data(dataSet)                      // 데이터 셋을 바인딩/매핑(내부에 저장)
    .enter()                            // 데이터 수만큼 element 생성
    .append("rect")                     // 추가할 element에 dataSet 연결해서 추가
    .attr("x", 0)                       // x좌표를 0으로
    .attr("y",function(d, i) {          // y좌표를 배열의 순서에 따라 계산
        return i * 25;                  // 막대 그래프의 높이를 25px단위로 계산
    })
    .attr("width", function(d, i) {     // 가로를 배열의 내용에 따라 계산
        return d + "px";                // 데이터의 값 == 가로 길이라서 그대로 넣기
    })
    .attr("height", "20px")             // 높이를 20px로
