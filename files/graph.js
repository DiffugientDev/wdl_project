let script1 = document.createElement('script');   
        script.src ="https://cdnjs.cloudflare.com/ajax/libs/d3/7.9.0/d3.min.js";         
        script1.integrity ="sha512-vc58qvvBdrDR4etbxMdlTt4GBQk1qjvyORR2nrsPsFPyrs+/u5c3+1Ct6upOgdZoIl7eq6k3a1UPDSNAQi/32A==";
        script1.crossOrigin ="anonymous";
        script1.referrerpolicy="no-referrer";
        document.head.appendChild(script1);

let script2 = document.createElement('script');
        script2.src = "https://cdn.jsdelivr.net/npm/chart.js";
        document.head.appendChild(script2);


const chartData = 'http://localhost:8000/data.csv';

//parse the file from CSV to JSON
d3.csv(chartData).then(function(datapoints) {
    const name = [];
    const ieScore = [];
    const opScore = [];
    const randomR = [];

    for (let i = 0; i < datapoints.length; i++) {
        name.push(datapoints[i].Name);
        ieScore.push(datapoints[i].ieScore);
        opScore.push(datapoints[i].opScore);
        randomR.push(Math.floor(Math.random() * 10) + 2); // Generates random integer between 1 and 10
    }
    console.log(name, ieScore, opScore);

    // Setup data
    const data = {
        labels: name,
        datasets: [{
            label: 'Score',
            data: datapoints.map((point, index) => ({ x: +ieScore[index], y: +opScore[index], r: randomR[index] })),
            borderWidth: 1
        }]
    };

    const quadrant = {
        id: 'quadrant',
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, chartArea: { left, top, right, bottom }, scales: { x, y } } = chart;

            // Draw horizontal line
            ctx.beginPath();
            ctx.moveTo(left, y.getPixelForValue(0));
            ctx.lineTo(right, y.getPixelForValue(0));
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'black';
            ctx.stroke();

            // Draw vertical line
            ctx.beginPath();
            ctx.moveTo(x.getPixelForValue(0), top);
            ctx.lineTo(x.getPixelForValue(0), bottom);
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'black';
            ctx.stroke();
        }
    };

    // config
    const config = {
        type: 'bubble',
        data,
        options: {
            aspectRatio: 1, // Set aspect ratio to 1
            scales: {
                x: {
                    min: -10,
                    max: 10,
                    ticks: {
                        stepSize: 1,
                        callback: function(value, index, values) {
                            if (value === -10) {
                                return 'Introvert';
                            } else if (value === 10) {
                                return 'Extrovert';
                            } else {
                                return value;
                            }
                        }
                    }
                },
                y: {
                    min: -10,
                    max: 10,
                    ticks: {
                        stepSize: 1,
                        callback: function(value, index, values) {
                            if (value === 10) {
                                return 'Optimist';
                            } else if (value === -10) {
                                return 'Pessimist';
                            } else {
                                return value;
                            }
                        }

                    }
                }
            }
        },
        plugins: [quadrant]
    };

    // render init block
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
});
