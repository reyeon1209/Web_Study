var dataSet = [300, 130, 50, 60, 240];

d3.select("#myGraph")                   // SVG 요소 지정
    .selectAll("rect")                  // 교체/추가할 대상이 될 element 선택
    .data(dataSet)                      // 데이터 셋을 내부에 저장
    .enter()                            // 데이터 수만큼 element 생성
    .append("rect")                     // 추가할 element와 데이터를 연결
    .attr("x", 0)                       // 가로형 막대그래프이므로 x좌표를 0으로 함
    .attr("y",function(d, i) {          // Y좌표를 배열의 순서에 따라 계산
        return i * 25;                  // 막대 그래프의 높이를 25px단위로 계산
    })
    .attr("width", function(d, i) {     // 넓이를 배열의 내용에 따라 계산
        return d + "px";                // 데이터의 값을 그대로 넣어야 함
    })
    .attr("height", "20px")             // 막대그래프의 높이를 20px로 지정
