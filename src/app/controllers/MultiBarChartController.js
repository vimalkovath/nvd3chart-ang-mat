(function() {
    angular
        .module('app')
        .controller('MultiBarChartController', ['sharedDataService',
            MultiBarChartController
        ]);

    function MultiBarChartController(sharedDataService) {
        var vm = this;
        vm.options = {
            chart: {
                type: 'multiBarChart',
                height: 250,
                x: function(d) { return d.label; },
                y: function(d) { return d.value; },
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 45,
                    left: 45
                },
                clipEdge: true,
                duration: 500,
                stacked: true,
                xAxis: {
                    axisLabel: 'Time (ms)',
                    // showMaxMin: false,
                    axisLabelDistance: -30,

                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 10,
                    tickFormat: function(d) {
                        return d3.format(',.1f')(d);
                    }
                }
            }
        };



        vm.data = [{
                "key": "Single",
                "color": "#d62728",
                "values": [{
                        "label": "21-30",
                        "value": 0
                    },
                    {
                        "label": "31-40",
                        "value": 0
                    },
                    {
                        "label": "41-50",
                        "value": 0
                    },
                    {
                        "label": "Above 50",
                        "value": 0
                    }
                ]
            },
            {
                "key": "Married",
                "color": "#1f77b4",
                "values": [{
                        "label": "21-30",
                        "value": 0
                    },
                    {
                        "label": "31-40",
                        "value": 0
                    },
                    {
                        "label": "41-50",
                        "value": 0
                    },
                    {
                        "label": "Above 50",
                        "value": 0
                    }
                ]
            },
            {
                "key": "Others",
                "color": 'green',
                "values": [{
                        "label": "21-30",
                        "value": 0
                    },
                    {
                        "label": "31-40",
                        "value": 0
                    },
                    {
                        "label": "41-50",
                        "value": 0
                    },
                    {
                        "label": "Above 50",
                        "value": 0
                    }
                ]
            }
        ]

        //vm.data = generateData();
        //vm.data = vm.chartData;


        /* Random Data Generator (took from nvd3.org) */

        sharedDataService.loadAllItemsFromCsv()
            .then(function(chartData) {
                vm.chartData = chartData;
                var data = chartData.data;

                vm.calculate = function(data) {
                    for (var i = 0; i < data.length; i++) {
                        var Age_bucket = data[i].Age_bucket;

                        var marriage = data[i].MARRIAGE;

                        if (Age_bucket == "21-30") {
                            (marriage == 1) ? vm.data[0].values[0].value++: (marriage == 2) ? vm.data[1].values[0].value++ : vm.data[2].values[0].value++;
                            //   vm.data[0].values[0].value = vm.data[0].values[0].value + 2;
                        } //don't forget to add the base 
                        if (Age_bucket == "31-40") {
                            (marriage == 1) ? vm.data[0].values[1].value++: (marriage == 2) ? vm.data[1].values[1].value++ : vm.data[2].values[3].value++;
                        }
                        if (Age_bucket == "41-50") {
                            (marriage == 1) ? vm.data[0].values[2].value++: (marriage == 2) ? vm.data[1].values[2].value++ : vm.data[2].values[3].value++;
                        }
                        if (Age_bucket == "Above 50") {
                            (marriage == 1) ? vm.data[0].values[3].value++: (marriage == 2) ? vm.data[1].values[3].value++ : vm.data[2].values[3].value++;
                        } //don't forget to add the base 

                    }
                }
                vm.calculate(data);
            });



    }
})();