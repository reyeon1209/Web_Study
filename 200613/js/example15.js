d3.text("https://reyeon1209.github.io/Web_Study/200613/data/mydata.txt",
    function(error, plainText) {
        var data = plainText.split("\x0a"); // 0x0a는 줄바꿈코드
        var dataSet = [];
        var sales = data[2].split("/"); // 처음 1줄을 / 구분자로 나누어 데이터를 분할

        for (var i = 1; i < sales.length; i++) {
            dataSet.push(sales[i]);
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