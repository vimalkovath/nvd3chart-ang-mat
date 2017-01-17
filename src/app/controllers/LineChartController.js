(function() {
    angular
        .module('app')
        .controller('LineChartController', ['sharedDataService',
            LineChartController
        ]);

    function LineChartController(sharedDataService) {
        var vm = this;
        /* month array*/ //, "August", "September", "October", "November", "December"
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
        //data   
        vm.data = [{
            color: 'rgb(0, 150, 136)',
            area: true,
            "values": [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 3, y: 0 },
                { x: 4, y: 0 },
                { x: 5, y: 0 }
            ]
        }]
        vm.lineChartData = vm.data;
        // TODO: move data to the service
        // vm.lineChartData = vm.sin;

        sharedDataService.loadAllItemsFromCsv()
            .then(function(chartData) {
                vm.chartData = chartData;
                console.log("Line chartGetting data" + chartData);
                var data = chartData.data;

                vm.calculate = function(data) {

                    for (var i = 0; i < data.length; i++) {
                        var jan = data[i].PAY_1,
                            feb = data[i].PAY_2,
                            mar = data[i].PAY_3,
                            apr = data[i].PAY_4,
                            may = data[i].PAY_5,
                            jun = data[i].PAY_6;
                        if (jan >= 2) {
                            //sin.push({ x: , y: i * 10 });
                            vm.data[0].values[0].y = vm.data[0].values[0].y + 1 / data.length;
                        } //don't forget to add the base 
                        if (feb >= 2) {
                            vm.data[0].values[1].y = vm.data[0].values[1].y + 1 / data.length;
                        }
                        if (mar >= 2) {
                            vm.data[0].values[2].y = vm.data[0].values[2].y + 1 / data.length;
                        }
                        if (apr >= 2) {
                            vm.data[0].values[3].y = vm.data[0].values[3].y + 1 / data.length;
                        } //don't forget to add the base 
                        if (may >= 2) {
                            vm.data[0].values[4].y = vm.data[0].values[4].y + 1 / data.length;
                        }
                        if (jun >= 2) {
                            vm.data[0].values[5].y = vm.data[0].values[5].y + 1 / data.length;
                        }
                    }
                }
                vm.calculate(data);
                //    return [{ values: vm.sin, color: 'rgb(0, 150, 136)', area: true }];
            });


        function warningFunction() {

            // for (var i = 0; i < 6; i++) {
            //     console.log(sin);
            //     sin.push({ x: i, y: i * 10 });

            // }

            //console.log("data" + sin);
            //return [{ values: sin, color: 'rgb(0, 150, 136)', area: true }];

            sharedDataService.loadAllItemsFromCsv()
                .then(function(chartData) {
                    vm.chartData = chartData;
                    console.log("Line chartGetting data" + chartData);
                    var data = chartData.data;

                    vm.calculate = function(data) {

                        for (var i = 0; i < data.length; i++) {
                            var jan = data[i].PAY_1;
                            var feb = data[i].PAY_2;
                            var mar = data[i].PAY_3;
                            var apr = data[i].PAY_4;
                            var may = data[i].PAY_5;
                            var jun = data[i].PAY_6;
                            console.log("jun : " + jun);
                            if (jan >= 2) {
                                //sin.push({ x: , y: i * 10 });
                                vm.sin[0].y++;
                            } //don't forget to add the base 
                            if (feb >= 2) {
                                vm.sin[1].y++;
                            }
                            if (mar >= 2) {
                                vm.sin[2].y++;
                            }
                            if (apr >= 2) {
                                vm.sin[3].y++;
                            } //don't forget to add the base 
                            if (may >= 2) {
                                vm.sin[4].y++;
                            }
                            if (jun >= 2) {
                                vm.sin[5].y++;
                            }
                        }
                    }
                    vm.calculate(data);
                    return [{ values: vm.sin, color: 'rgb(0, 150, 136)', area: false }];
                });

        }

        vm.chartOptions = {
            chart: {
                type: 'lineChart',
                height: 210,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function(d) { return d.x; },
                y: function(d) { return d.y; },
                useInteractiveGuideline: true,
                xAxis: {
                    axisLabel: 'Month\'s',
                    tickFormat: function(d) {
                        return monthNames[d];
                    }
                },

                yAxis: {
                    axisLabel: 'Delinquency Rate (v)',
                    tickFormat: function(d) {
                        return d3.format('.03f')(d);
                    },
                    axisLabelDistance: 1
                },
                callback: function(chart) {
                    console.log("!!! lineChart callback !!!");
                }
            }
        };

    }
})();