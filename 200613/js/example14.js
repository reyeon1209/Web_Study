d3.xml("https://reyeon1209.github.io/Web_Study/200613/data/mydata.xml",
    function(error, xmlRoot) {
        var xmlData = xmlRoot.querySelectorAll("data"); // data요소를 추출
        var salesRoot = xmlData[0]; // 상품 A의 데이터만 추출

        var salesData = salesRoot.querySelectorAll("sales");    // sales요소를 추출
        var dataSet = [];
        for (var i = 0; i < salesData.length; i++) {
            var d = salesData[i].firstChild.nodeValue;  // 데이터 읽어들이기
            dataSet.push(d);
        }
    
        d3.select("#myGraph")
            .selectAll("rect")
            .data(dataSet)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("width", function(d, i) {
                return d;
            })
            .attr("height", 20)
            .attr("x", 0)
            .attr("y", function(d, i) {
                return i * 25;
            })
        })