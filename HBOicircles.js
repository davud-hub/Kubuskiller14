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
    RenderPieChart('Beroepsniveau', beroepstaken, document);
    RenderPieChart('Architectuurlaag', architectuurlagen, document);
});


function RenderPieChart(elementId, dataList, document) {
    // construct circle with highcharts -> documentation: 
    // https://api.highcharts.com/highcharts/

    Highcharts.setOptions({
        colors: ['#2c3e50'],
    });

    new Highcharts.Chart({
        //  draw circle
        chart: {
            renderTo: elementId
        },
        title: {
            text: null
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
                    enabled: true,
                    padding: 5,
                    connectorPadding: 1,
                    className: 'labels',
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
                    click: function (selector) {

                        if (elementId == 'Architectuurlaag') {
                            laag = selector.point.name
                        }
                        if (elementId == 'Beroepsniveau') {
                            taak = selector.point.name
                        }
                        if (laag != '' && taak != '') {
                            // render css 'laag' + _ + 'taak' to main css 'combi' active 
                            if (taak == 'Manage and Control') {
                                taak = taak.slice(0, 6)
                            }
                            if (laag == 'Hardware Interfacing') {
                                laag = laag.slice(0, 8)
                            }
                            console.log('selection made: ' + laag.toLowerCase() + ' & ' + taak.toLowerCase());

                            $('.combi').removeClass("active");
                            
                            var activeCards = document.getElementById(laag.toLowerCase() + '_' + taak.toLowerCase());
                            activeCards.classList.add('active');

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