d3.selectAll(".bar")
    .style("fill", function(d, i) {
        if (i == 2)
            return "red";
    })