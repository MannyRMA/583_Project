/*
    CPSC 583 Term Project
    Manuel Rodriguez
    Visualizing 2020 hitting and sabermetric data of the projected top 202 MLB players for 2021
 */

let data = d3.csv("MLB.csv")
    .then(showData);

function showData(players) {
    // getting the maximum AVG and SLG
    let maxAVG = d3.max(players.map(pl => pl.AVG));
    let maxSLG = d3.max(players.map(pl => pl.SLG));

    // setting up the x and y scales
    let scaleAVG_X = d3.scaleBand()
                            .range([0,5000])
                            .domain(players.map(pl => pl.Name))
                            .padding(0.5);
    let scaleAVG_Y = d3.scaleLinear()
                        .domain([maxAVG,0])
                        .range([0,550]);

    // scale for slugging stack bar
    let scaleSLG_X = d3.scaleBand()
                        .domain([0,maxSLG])
                        .range([0,700]);


    // Bar graph for Player Averages
    let AVG_Bars = d3.select(".bars");
    let height = AVG_Bars.attr("height");
                        AVG_Bars.selectAll("rect")
                        .data(players).enter()
                        .append("rect")
                        .attr("width",5)
                        .attr("height", pl => scaleAVG_Y(pl.AVG))
                        .attr("x",pl => scaleAVG_X(pl.Name))
                            .attr("y", function(pl) { return (height - scaleAVG_Y(pl.AVG)); })
                        .attr("fill","orange")
                        .attr("transform","translate(120,550)")


    let axisX = d3.axisBottom(scaleAVG_X);
    let axisY = d3.axisLeft(scaleAVG_Y);

    d3.select("#axis_AVG_X").attr("transform","translate(120,550)").call(axisX);
    d3.select("#axis_AVG_Y").attr("transform","translate(120,0)").call(axisY);


    // scatter plot for exit velocity and launch angle
    let maxEV = d3.max(players.map(pl => pl.EV));
    let scaleEV_X = d3.scaleLinear()
                        .domain([82,maxEV])
                        .range([0,630]);
    let scaleLA_Y = d3.scaleLinear()
                        .domain([27,-4])
                        .range([0,630]);

    let hitting_scatter = d3.select(".scatter")
                            .selectAll("circle")
                            .data(players).enter()
                            .append("circle")
                            .attr("r",4)
                            .attr("cx",pl => scaleEV_X(pl.EV))
                            .attr("cy",pl => scaleLA_Y(pl.LA))
                            .attr("fill","white")
                            .attr("transform","translate(360,50)");
    let axisEV = d3.axisBottom(scaleEV_X);
    let axisLA = d3.axisLeft(scaleLA_Y);
    d3.select("#axis_EV").attr("transform","translate(360,595)").call(axisEV);

    d3.select("#axis_LA").attr("transform","translate(360,50)").call(axisLA);

    // example pie graph for Aaron Judge directional hitting
    let sample_data = [53.60, 29.00, 17.40]; // actual data from dataset hardcoded to test pie graphs
    let pie_colours = d3.scaleOrdinal(["#E63535", "#F27200", "#FFC300"]);

    // Generating the pie
    let Aaron_Judge_pie = d3.pie();

    let pie_svg = d3.select(".pie");

    let pie_width = pie_svg.attr("width"),
        pie_height = pie_svg.attr("height"),
        pie_radius = Math.min(pie_width, pie_height) / 2,
        pie_group = pie_svg.append("g").attr("transform", "translate(" + pie_width / 2 + "," + pie_height / 2 + ")");

    // generating arcs
    let pie_arc = d3.arc()
        .innerRadius(0)
        .outerRadius(pie_radius);

    // generate the groups
    let arcs = pie_group.selectAll("arc")
        .data(Aaron_Judge_pie(sample_data)).enter()
        .append("g")
        .attr("class", "arc");

    // darawing the arc paths
    arcs.append("path")
        .attr("fill", function(d,i) {
            return pie_colours(i)
        })
        .attr("d", pie_arc);



}
