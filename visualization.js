/*
    CPSC 583 Term Project
    Manuel Rodriguez
    Visualizing 2020 hitting and sabermetric data of the projected top 202 MLB players for 2021
 */

let data = d3.csv("MLB.csv")
    .then((data) => {


        let DodgersPlayers = data.filter(function(p) {return p.Team == "Dodgers"});
        showData(DodgersPlayers);

        // diamondbacks players stats
        let DiamondbacksOption = d3.select("#Diamondbacks_Logo");
        DiamondbacksOption.on("click", function() {
            let DiamondbacksPlayers = data.filter(function(p) {return p.Team == "Diamondbacks"});
            updateViz(DiamondbacksPlayers);
        });

        // braves players stats
        let BravesOption = d3.select("#Braves_Logo");
        BravesOption.on("click", function() {
            let BravesPlayers = data.filter(function(p) {return p.Team == "Braves"});
            updateViz(BravesPlayers);
        });

        // orioles players stats
        let OriolesOption = d3.select("#Orioles_Logo");
        OriolesOption.on("click", function() {
            let OriolesPlayers = data.filter(function(p) {return p.Team == "Orioles"});
            updateViz(OriolesPlayers);
        });

        // red sox players stats
        let RedSoxOption = d3.select("#Red_Sox_Logo");
        RedSoxOption.on("click", function() {
            let RedSoxPlayers = data.filter(function(p) {return p.Team == "Red Sox"});
            updateViz(RedSoxPlayers);
        });

        // cubs players stats
        let CubsOption = d3.select("#Cubs_Logo");
        CubsOption.on("click", function() {
            let CubsPlayers = data.filter(function(p) {return p.Team == "Cubs"});
            updateViz(CubsPlayers);
        });

        // white sox players stats
        let WhiteSoxOption = d3.select("#White_Sox_Logo");
        WhiteSoxOption.on("click", function() {
            let WhiteSoxPlayers = data.filter(function(p) {return p.Team == "White Sox"});
            updateViz(WhiteSoxPlayers);
        });

        // reds players stats
        let RedsOption = d3.select("#Reds_Logo");
        RedsOption.on("click", function() {
            let RedsPlayers = data.filter(function(p) {return p.Team == "Reds"});
            updateViz(RedsPlayers);
        });

        // indians players stats
        let IndiansOption = d3.select("#Indians_Logo");
        IndiansOption.on("click", function() {
            let IndiansPlayers = data.filter(function(p) {return p.Team == "Indians"});
            updateViz(IndiansPlayers);
        });

        // rockies players stats
        let RockiesOption = d3.select("#Rockies_Logo");
        RockiesOption.on("click", function() {
            let RockiesPlayers = data.filter(function(p) {return p.Team == "Rockies"});
            updateViz(RockiesPlayers);
        });

        // tigers players stats
        let TigersOption = d3.select("#Tigers_Logo");
        TigersOption.on("click", function() {
            let TigersPlayers = data.filter(function(p) {return p.Team == "Tigers"});
            updateViz(TigersPlayers);
        });

        // astros players stats
        let AstrosOption = d3.select("#Astros_Logo");
        AstrosOption.on("click", function() {
            let AstrosPlayers = data.filter(function(p) {return p.Team == "Astros"});
            updateViz(AstrosPlayers);
        })

        // royals players stats
        let RoyalsOption = d3.select("#Royals_Logo");
        RoyalsOption.on("click", function() {
            let RoyalsPlayers = data.filter(function(p) {return p.Team == "Royals"});
            updateViz(RoyalsPlayers);
        })

        // angels players stats
        let AngelsOption = d3.select("#Angels_Logo");
        AngelsOption.on("click", function() {
            let AngelsPlayers = data.filter(function(p) {return p.Team == "Angels"});
            updateViz(AngelsPlayers);
        });

        // dodgers players stats
        let DodgersOption = d3.select("#Dodgers_Logo");
        DodgersOption.on("click", function () {
           updateViz(DodgersPlayers);
        });

        // marlins players stats
        let MarlinsOption = d3.select("#Marlins_Logo");
        MarlinsOption.on("click", function() {
            let MarlinsPlayers = data.filter(function(p) {return p.Team == "Marlins"});
            updateViz(MarlinsPlayers);
        });

        // brewers players stats
        let BrewersOption = d3.select("#Brewers_Logo");
        BrewersOption.on("click", function() {
            let BrewersPlayers = data.filter(function(p) {return p.Team == "Brewers"});
            updateViz(BrewersPlayers);
        });

        // twins players stats
        let TwinsOption = d3.select("#Twins_Logo");
        TwinsOption.on("click", function() {
            let TwinsPlayers = data.filter(function(p) {return p.Team == "Twins"});
            updateViz(TwinsPlayers);
        });

        // mets players stats
        let MetsOption = d3.select("#Mets_Logo");
        MetsOption.on("click", function() {
            let MetsPlayers = data.filter(function(p) {return p.Team == "Mets"});
            updateViz(MetsPlayers);
        });

        // yankees players stats
        let yankeesOption = d3.select("#Yankees_Logo");
        yankeesOption.on("click", function() {
            let yankeesPlayers = data.filter(function(p) {return p.Team == "Yankees"});
            updateViz(yankeesPlayers);
        });

        // Athletics players stats
        let AthleticsOption = d3.select("#Athletics_Logo");
        AthleticsOption.on("click", function() {
            let AthleticsPlayers = data.filter(function(p) {return p.Team == "Athletics"});
            updateViz(AthleticsPlayers);
        });

        // phillies players stats
        let PhilliesOption = d3.select("#Phillies_Logo");
        PhilliesOption.on("click", function() {
            let PhilliesPlayers = data.filter(function(p) {return p.Team == "Phillies"});
            updateViz(PhilliesPlayers);
        });

        // pirates players stats
        let PiratesOption = d3.select("#Pirates_Logo");
        PiratesOption.on("click", function() {
            let PiratesPlayers = data.filter(function(p) {return p.Team == "Pirates"});
            updateViz(PiratesPlayers);
        });

        // padres players stats
        let PadresOption = d3.select("#Padres_Logo");
        PadresOption.on("click", function() {
            let PadresPlayers = data.filter(function(p) {return p.Team == "Padres"});
            updateViz(PadresPlayers);
        });

        // giants players stats
        let GiantsOption = d3.select("#Giants_Logo");
        GiantsOption.on("click", function() {
            let GiantsPlayers = data.filter(function(p) {return p.Team == "Giants"});
            updateViz(GiantsPlayers);
        });

        // mariners players stats
        let MarinersOption = d3.select("#Mariners_Logo");
        MarinersOption.on("click", function() {
            let MarinersPlayers = data.filter(function(p) {return p.Team == "Mariners"});
            updateViz(MarinersPlayers);
        });

        // cardinals players stats
        let CardinalsOption = d3.select("#Cardinals_Logo");
        CardinalsOption.on("click", function() {
            let CardinalsPlayers = data.filter(function(p) {return p.Team == "Cardinals"});
            updateViz(CardinalsPlayers);
        });

        // rays players stats
        let RaysOption = d3.select("#Rays_Logo");
        RaysOption.on("click", function() {
            let RaysPlayers = data.filter(function(p) {return p.Team == "Rays"});
            updateViz(RaysPlayers);
        });

        // Rangers players stats
        let RangersOption = d3.select("#Rangers_Logo");
        RangersOption.on("click", function() {
            let RangersPlayers = data.filter(function(p) {return p.Team == "Rangers"});
            updateViz(RangersPlayers);
        });

        // blue jays players stats
        let BlueJaysOption = d3.select("#Blue_Jays_Logo");
        BlueJaysOption.on("click", function() {
            let BlueJaysPlayers = data.filter(function(p) {return p.Team == "Blue Jays"});
            updateViz(BlueJaysPlayers);
        });

        // nationals players stats
        let NationalsOption = d3.select("#Nationals_Logo");
        NationalsOption.on("click", function() {
            let NationalsPlayers = data.filter(function(p) {return p.Team == "Nationals"});
            updateViz(NationalsPlayers);
        });

        // rest of the players (players that played with multiple teams)
        let MLBOption = d3.select("#MLB_Logo");
        MLBOption.on("click", function() {
            let MLBPlayers = data.filter(function(p) {return p.Team == "- - -"});
            updateViz(MLBPlayers);
        })


    });


function showData(players) {

    let hitting_scatter = d3.select(".scatter");

    let AVG_Bars = d3.select(".bars");

    console.log(players.length);

    // getting the maximum AVG and SLG
    let maxAVG = d3.max(players.map(pl => pl.AVG));
    let maxSLG = d3.max(players.map(pl => pl.SLG));

    // setting up the x and y scales
    let scaleAVG_X = d3.scaleBand()
                            .range([0,(players.length * 120)])
                            .domain(players.map(pl => pl.Name))
                            .padding(0.85);
    let scaleAVG_Y = d3.scaleLinear()
                        .domain([0.4,0])
                        .range([0,550]);

    // scale for slugging stack bar
    let scaleSLG_X = d3.scaleBand()
                        .domain([0,maxSLG])
                        .range([0,700]);


    // Bar graph for Player Averages

    let height = AVG_Bars.attr("height");
                        AVG_Bars.selectAll("rect")
                        .data(players).enter()
                        .append("rect")
                        .attr("width",15)
                        .attr("height", function(pl) { return scaleAVG_Y(pl.AVG); })
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


            hitting_scatter.selectAll("circle")
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

function updateViz(playerList) {

    // beginning by updating the scatter plot
    let hitting_scatter = d3.select(".scatter");

    // scatter plot for exit velocity and launch angle
    let maxEV = d3.max(playerList.map(pl => pl.EV));
    let scaleEV_X = d3.scaleLinear()
        .domain([82,maxEV])
        .range([0,630]);
    let scaleLA_Y = d3.scaleLinear()
        .domain([27,-4])
        .range([0,630]);

    hitting_scatter.selectAll("circle")
        .data(playerList)
        .transition()
        .duration(1500)
        .on("start", function() {
            d3.select(this)
                .attr("fill", "green")
                .attr("r", 10)
        })
        .attr("cx",pl => scaleEV_X(pl.EV))
        .attr("cy",pl => scaleLA_Y(pl.LA))
        .on("end", function() {
            d3.select(this)
                .transition()
                .duration(500)
                .attr("fill", "white")
                .attr("r", 4)
        })
        .attr("fill","white")
        .attr("transform","translate(360,50)");

    let axisEV = d3.axisBottom(scaleEV_X);
    let axisLA = d3.axisLeft(scaleLA_Y);
    d3.select("#axis_EV")
        .transition()
        .duration(500)
        .attr("transform","translate(360,595)")
        .call(axisEV);

    d3.select("#axis_LA")
        .transition()
        .duration(500)
        .attr("transform","translate(360,50)")
        .call(axisLA);

    // now update the bar graph
    let AVG_Bars = d3.select(".bars");

    let scaleAVG_X = d3.scaleBand()
        .range([0, (playerList.length * 120)])
        .domain(playerList.map(player => player.Name))
        .padding(0.75);

    let scaleAVG_Y = d3.scaleLinear()
        .domain([0.4,0])
        .range([0,550]);

    let height = AVG_Bars.attr("height");

    console.log("hell0");

    AVG_Bars.selectAll("rect")
        .data(playerList)
        .transition()
        .duration(1500)
        .on("start", function() {
            d3.select(this)
                .attr("fill", "green")
                .attr("width", 30)
        })
        .attr("x", player => scaleAVG_X(player.Name))
        .attr("height", player => scaleAVG_Y(player.AVG))
        .attr("y", function(player) { return (height - scaleAVG_Y(player.AVG)) })
        .on("end", function() {
            d3.select(this)
                .transition()
                .duration(500)
                .attr("fill", "orange")
                .attr("width", 15)
        })
        .attr("fill", "orange")
        .attr("transform","translate(120,550)");

    let axisX = d3.axisBottom(scaleAVG_X);
    let axisY = d3.axisLeft(scaleAVG_Y);

    d3.select("#axis_AVG_X")
        .transition()
        .duration(500)
        .attr("transform","translate(120,550)")
        .call(axisX);

    d3.select("#axis_AVG_Y")
        .transition()
        .duration(500)
        .attr("transform","translate(120,0)")
        .call(axisY);

}
