(function() {
    angular
        .module('app')
        .controller('MultiBarHorizontalController', ['sharedDataService',
            MultiBarHorizontalController
        ]);

    function MultiBarHorizontalController(sharedDataService) {
        var vm = this;

        vm.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 300,
                x: function(d) { return d.label; },
                y: function(d) { return d.value; },
                //yErr: function(d){ return [-Math.abs(d.value * Math.random() * 0.3), Math.abs(d.value * Math.random() * 0.3)] },
                showControls: true,
                showValues: true,
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Values',
                    tickFormat: function(d) {
                        return d3.format(',.2f')(d);
                    }
                }
            }
        };

        vm.data = [{
                "key": "Series1",
                "color": "#d62728",
                "values": [{
                        "label": "Virginia",
                        "value": 0
                    },
                    {
                        "label": "Texas",
                        "value": 0
                    },
                    {
                        "label": "Pennsylvania",
                        "value": 0
                    },
                    {
                        "label": "Massachusetts",
                        "value": 0
                    },
                    {
                        "label": "Ohio",
                        "value": 0
                    },
                    {
                        "label": "Arkansas",
                        "value": 0
                    },
                    {
                        "label": "New York",
                        "value": 0
                    },
                    {
                        "label": "Washington",
                        "value": 0
                    }
                ]
            },
            {
                "key": "Series2",
                "color": "#1f77b4",
                "values": [{
                        "label": "Virginia",
                        "value": 0
                    },
                    {
                        "label": "Texas",
                        "value": 0
                    },
                    {
                        "label": "Pennsylvania",
                        "value": 0
                    },
                    {
                        "label": "Massachusetts",
                        "value": 0
                    },
                    {
                        "label": "Ohio",
                        "value": 0
                    },
                    {
                        "label": "Arkansas",
                        "value": 0
                    },
                    {
                        "label": "New York",
                        "value": 0
                    },
                    {
                        "label": "Washington",
                        "value": 0
                    }
                ]
            }
        ]
        console.log(" vm.data[0].values[0].value" + vm.data[0].values[0].value);
        /***  getting data from server/csv and manipulate with chart */
        //   vm.getChartData = function() {
        sharedDataService.loadAllItemsFromCsv()
            .then(function(chartData) {
                vm.chartData = chartData;
                console.log("horizontal bar chartGetting data" + chartData);
                var data = chartData.data;

                vm.calculate = function(data) {
                    for (var i = 0; i < data.length; i++) {
                        var State = data[i].State;
                        var Churn = data[i].Churn;
                        if (State == "Virginia") {
                            (Churn == 0) ? vm.data[0].values[0].value++: vm.data[1].values[0].value++;
                            //   vm.data[0].values[0].value = vm.data[0].values[0].value + 2;
                        } //don't forget to add the base 
                        if (State == "Texas") {
                            (Churn == 0) ? vm.data[0].values[1].value++: vm.data[1].values[1].value++;
                        }
                        if (State == "Pennsylvania") {
                            (Churn == 0) ? vm.data[0].values[2].value = vm.data[0].values[2].value + 1: vm.data[1].values[2].value = vm.data[1].values[2].value + 1;
                        }
                        if (State == "Massachusetts") {
                            (Churn == 0) ? vm.data[0].values[3].value++: vm.data[1].values[3].value = vm.data[1].values[3].value + 1;
                        } //don't forget to add the base 
                        if (State == " Ohio ") {
                            (Churn == 0) ? vm.data[0].values[4].value = vm.data[0].values[4].value + 1: vm.data[1].values[4].value = vm.data[1].values[4].value + 1;
                        }
                        if (State == " Arkansas ") {
                            (Churn == 0) ? vm.data[0].values[4].value = vm.data[0].values[4].value + 1: vm.data[1].values[4].value = vm.data[1].values[4].value + 1;
                        }
                        if (State == " New York ") {
                            (Churn == 0) ? vm.data[0].values[4].value = vm.data[0].values[4].value + 1: vm.data[1].values[4].value = vm.data[1].values[4].value + 1;
                        }
                        if (State == " Washington ") {
                            (Churn == 0) ? vm.data[0].values[4].value = vm.data[0].values[4].value + 1: vm.data[1].values[4].value = vm.data[1].values[4].value + 1;
                        }
                    }
                }
                vm.calculate(data);
            });
        //   };




    }

})();