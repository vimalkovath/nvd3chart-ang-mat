(function() {
    angular
        .module('app')
        .controller('MultiBarChartController', ['sharedDataService',
            MultiBarChartController
        ]);

    function MultiBarChartController(sharedDataService) {
        var vm = this;

        // vm.options = {
        //     chart: {
        //         type: 'multiBarChart',
        //         height: 300,
        //         x: function(d) { return d.label; },
        //         y: function(d) { return d.value; },
        //         //yErr: function(d){ return [-Math.abs(d.value * Math.random() * 0.3), Math.abs(d.value * Math.random() * 0.3)] },
        //         showControls: true,
        //         showValues: true,
        //         duration: 500,
        //         xAxis: {
        //             showMaxMin: false
        //         },
        //         yAxis: {
        //             axisLabel: 'Values',
        //             tickFormat: function(d) {
        //                 return d3.format(',.2f')(d);
        //             }
        //         }
        //     }
        // };

        // vm.data = [{
        //             "key": "Series1",
        //             "color": "#d62728",
        //             "values": [{
        //                     "label": "Virginia",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Texas",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Pennsylvania",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Massachusetts",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Ohio",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Arkansas",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "New York",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Washington",
        //                     "value": 0
        //                 }
        //             ]
        //         },
        //         {
        //             "key": "Series2",
        //             "color": "#1f77b4",
        //             "values": [{
        //                     "label": "Virginia",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Texas",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Pennsylvania",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Massachusetts",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Ohio",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Arkansas",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "New York",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Washington",
        //                     "value": 0
        //                 }
        //             ]
        //         },
        //         {
        //             "key": "Series3",
        //             "color": 'green',
        //             "values": [{
        //                     "label": "Virginia",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Texas",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Pennsylvania",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Massachusetts",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Ohio",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Arkansas",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "New York",
        //                     "value": 0
        //                 },
        //                 {
        //                     "label": "Washington",
        //                     "value": 0
        //                 }
        //             ]
        //         }
        //     ]
        //     /***  getting data from server/csv and manipulate with chart */
        //     //   vm.getChartData = function() {
        // sharedDataService.loadAllItemsFromCsv()
        //     .then(function(chartData) {
        //         vm.chartData = chartData;
        //         var data = chartData.data;

        //         vm.calculate = function(data) {
        //             for (var i = 0; i < data.length; i++) {
        //                 var State = data[i].State;
        //                 var Churn = data[i].Churn;
        //                 if (State == "Virginia") {
        //                     (Churn == 0) ? vm.data[0].values[0].value++: vm.data[1].values[0].value++;
        //                     //   vm.data[0].values[0].value = vm.data[0].values[0].value + 2;
        //                 } //don't forget to add the base 
        //                 if (State == "Texas") {
        //                     (Churn == 0) ? vm.data[0].values[1].value++: vm.data[1].values[1].value++;
        //                 }
        //                 if (State == "Pennsylvania") {
        //                     (Churn == 0) ? vm.data[0].values[2].value++: vm.data[1].values[2].value++;
        //                 }
        //                 if (State == "Massachusetts") {
        //                     (Churn == 0) ? vm.data[0].values[3].value++: vm.data[1].values[3].value++;
        //                 } //don't forget to add the base 
        //                 if (State == "Ohio") {
        //                     (Churn == 0) ? vm.data[0].values[4].value++: vm.data[1].values[4].value++;
        //                 }
        //                 if (State == "Arkansas") {
        //                     (Churn == 0) ? vm.data[0].values[5].value++: vm.data[1].values[5].value++;
        //                 }
        //                 if (State == "New York") {
        //                     (Churn == 0) ? vm.data[0].values[6].value++: vm.data[1].values[6].value;
        //                 }
        //                 if (State == "Washington") {
        //                     (Churn == 0) ? vm.data[0].values[7].value++: vm.data[1].values[7].value++;
        //                 }
        //             }
        //         }
        //         vm.calculate(data);
        //     });
        //   };



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



        vm.chartData = [{
                "key": "Series1",
                "color": "#d62728",
                "values": [{
                        "label": "Virginia",
                        "value": 5
                    },
                    {
                        "label": "Texas",
                        "value": 5
                    },
                    {
                        "label": "Pennsylvania",
                        "value": 5
                    },
                    {
                        "label": "Massachusetts",
                        "value": 5
                    },
                    {
                        "label": "Ohio",
                        "value": 9
                    },
                    {
                        "label": "Arkansas",
                        "value": 9
                    },
                    {
                        "label": "New York",
                        "value": 3
                    },
                    {
                        "label": "Washington",
                        "value": 6
                    }
                ]
            },
            {
                "key": "Series2",
                "color": "#1f77b4",
                "values": [{
                        "label": "Virginia",
                        "value": 45
                    },
                    {
                        "label": "Texas",
                        "value": 5
                    },
                    {
                        "label": "Pennsylvania",
                        "value": 5
                    },
                    {
                        "label": "Massachusetts",
                        "value": 4
                    },
                    {
                        "label": "Ohio",
                        "value": 15
                    },
                    {
                        "label": "Arkansas",
                        "value": 10
                    },
                    {
                        "label": "New York",
                        "value": 2
                    },
                    {
                        "label": "Washington",
                        "value": 1
                    }
                ]
            },
            {
                "key": "Series3",
                "color": "#d62728",
                "values": [{
                        "label": "Virginia",
                        "value": 5
                    },
                    {
                        "label": "Texas",
                        "value": 5
                    },
                    {
                        "label": "Pennsylvania",
                        "value": 5
                    },
                    {
                        "label": "Massachusetts",
                        "value": 5
                    },
                    {
                        "label": "Ohio",
                        "value": 9
                    },
                    {
                        "label": "Arkansas",
                        "value": 9
                    },
                    {
                        "label": "New York",
                        "value": 3
                    },
                    {
                        "label": "Washington",
                        "value": 6
                    }
                ]
            }
        ]

        //vm.data = generateData();
        vm.data = vm.chartData;


        /* Random Data Generator (took from nvd3.org) */
        function generateData() {
            return stream_layers(3, 5 + Math.random() * 50, .1).map(function(data, i) {
                console.log(i + "data" + data[0].y)
                return {
                    key: 'Stream' + i,
                    values: data
                };
            });
        }

        /* Inspired by Lee Byron's test data generator. */
        function stream_layers(n, m, o) {
            if (arguments.length < 3) o = 0;

            function bump(a) {
                var x = 1 / (.1 + Math.random()),
                    y = 2 * Math.random() - .5,
                    z = 10 / (.1 + Math.random());
                for (var i = 0; i < m; i++) {
                    var w = (i / m - y) * z;
                    a[i] += x * Math.exp(-w * w);
                }
            }
            return d3.range(n).map(function() {
                var a = [],
                    i;
                for (i = 0; i < m; i++) a[i] = o + o * Math.random();
                for (i = 0; i < 5; i++) bump(a);
                return a.map(stream_index);
            });
        }

        /* Another layer generator using gamma distributions. */
        function stream_waves(n, m) {
            return d3.range(n).map(function(i) {
                return d3.range(m).map(function(j) {
                    var x = 20 * j / m - i / 3;
                    return 2 * x * Math.exp(-.5 * x);
                }).map(stream_index);
            });
        }

        function stream_index(d, i) {
            return { x: i, y: Math.max(0, d) };
        }
    }

})();