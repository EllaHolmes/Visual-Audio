/**
 * Created by ellaholmes on 8/12/16.
 */
var mouse = [480, 250],
    count = 0,
    numberOfRect = 32;

var svg = d3.select("body").append("svg")
    .attr("width", 960)
    .attr("height", 500);

var g = svg.selectAll("g")
    .data(d3.range(numberOfRect))
    .enter().append("g")
    .attr("transform", "translate(" + mouse + ")");

g.append("rect")
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("x", -12.5)
    .attr("y", -12.5)
    .attr("width", 25)
    .attr("height", 25)
    .attr("border", 1)
    .attr("transform", function (d, i) { return "scale(" + (1 - d / 25) * 20 + ")";})
    .style("fill", "magenta")
    .style("stroke", "blue");

function setup(){
    audioFile.loop();
    analyzer = new p5.FFT(0.7, numberOfRect);
    analyzer.setInput(audioFile);
}

g.datum(function (d) {
    return {center: mouse.slice(), angle: 0};
});

svg.on("mousemove", function () {
    mouse = d3.mouse(this);
});

// d3.timer(function () {
//     count++;
//     g.attr("transform", function (d, i) {
//         d.center[0] += (mouse[0] - d.center[0]) / (i + 5);
//         d.center[1] += (mouse[1] - d.center[1]) / (i + 5);
//         d.angle += Math.sin((count + i) / 10) * 7;
//         return "translate(" + d.center + ")rotate(" + d.angle + ")";
//     });
// });

function draw(){
    count++;
    var spectrum = analyzer.analyze();
    var average = Math.round(spectrum[spectrum.length/2] * 100.0 / 300) / 100;
    console.log(spectrum[10]);
    g.attr("transform", function (d, i) {

        d.center[0] += (mouse[0] - d.center[0]) / (i + 5);
        d.center[1] += (mouse[1] - d.center[1]) / (i + 5);
        d.angle += Math.sin((count + i) / 10) * 7;
        return "scale(" + average + ")translate(" + d.center + ")rotate(" + d.angle + ")";
    });

}

svg.on("click", function(){
    console.log("mouse click");
    g.style("fill", "yellow");
});