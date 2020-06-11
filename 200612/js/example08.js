var dataSet = [300, 130, 50, 60, 240];

d3.select("#myGraph")
    .selectAll("rect")
    .data(dataSet)
    .enter()
    .append("rect")
    .attr("x", 10)
    .attr("y", function(d, i) {
        return i * 25;
    })
    .attr("height", "20px")
    .attr("width", function(d, i) {
        return d + "px";
    })

// linear scale 설정 (눈금 표시하기 위해)
var xScale = d3.scale.linear()
                    .domain([0, 350])
                    .range([0, 350])

// 눈금 설정 + 표시
d3.select("#myGraph")
    .append("g")            // 그룹화
    .attr("class", "axis")  // 스타일시트 클래스 설정
    .attr("transform", "translate(10, " + ((1+dataSet.length)*20+5) + ")")
    // 표시 위치 조정
    .call(d3.svg.axis()    // 눈금을 표시할 함수 호출
           .scale(xScale)          // scale 적용
            .orient("bottom")       // 눈금의 표시 위치 : bottom
    )