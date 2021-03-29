const architectuurlagen = [
    ['Gebruikersinteractie', 1],
    ['Organisatieprocessen', 1],
    ['Infrastructuur', 1],
    ['Software', 1],
    ['Hardware Interfacing', 1]
]

const beroepstaken = [
    ['Analyseren', 1],
    ['Adviseren', 1],
    ['Ontwerpen', 1],
    ['Realiseren', 1],
    ['Manage and Control', 1]
]

// start values circle
var laag = '';
var taak = '';


// draw circles
$(document).ready(function () {
    RenderPieChart('Architectuurlaag', architectuurlagen);
    RenderPieChart('Beroepsniveau', beroepstaken);
});


function RenderPieChart(elementId, dataList) {
    // construct circle with highcharts -> documentation: 
    // https://api.highcharts.com/highcharts/

    Highcharts.setOptions({
        colors: ['#fffff'],
    });

    new Highcharts.Chart({
        //  draw circle
        chart: {
            renderTo: elementId
        },
        title: {
            text: elementId
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                slicedOffset: 15,
                animation: {
                    duration: 500
                },
                dataLabels: {
                    padding: 5,
                    connectorPadding: 1,
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    formatter: function () {
                        return this.point.isNull ? void 0 : this.point.name;
                    }
                },
                states: {
                    inactive: {
                        enabled: false
                    }
                },
                events: {
                    // click function
                    
                    click: function (selector) {
                        
                        if (elementId == 'Architectuurlaag') {
                            var laag = selector.point.name
                            console.log('slice: ' + laag )
                            if (laag != '' && taak != '') {
                                // render id as 'laag' +  _ + 'taak'
                                console.log('- selection made -   ' + laag + ': ' + taak)
                            }
                        }
                        
                        if (elementId == 'Beroepsniveau') {
                            var taak = selector.point.name
                            console.log('slice: ' + taak )
                            if (laag != '' && taak != '') {
                                // render id as 'laag' +  _ + 'taak'
                                console.log('- selection made -   ' + laag + ': ' + taak)
                            }
                        }
              
                        }
                }
            }
        },

        // standard layout
        series: [{
            type: 'pie',
            data: dataList,
        }],
        tooltip: {
            enabled: false
        },

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        }

    });
};