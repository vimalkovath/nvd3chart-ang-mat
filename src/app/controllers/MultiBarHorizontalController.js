(function() {
    angular
        .module('app')
        .controller('MultiBarHorizontalController', ['sharedDataService', '$rootScope', '$scope',
            MultiBarHorizontalController
        ]);

    function MultiBarHorizontalController(sharedDataService, $rootScope, $scope) {
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

        var datas = [{
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

        // master data
        $scope.master = [{
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
            /***  getting data from server/csv and manipulate with chart */
            //   vm.getChartData = function() {
            //var deferred = $q.defer();deferred.resolve({ data: data });

        $scope.reset = function() {
            // Example with 1 argument
            vm.data = angular.copy($scope.master);
        };

        var chartData = sharedDataService.getData();

        $scope.chartData = chartData.data;
        // $scope.$watch(function() { vm.data }, function(newValue, oldValue) {

        //     console.log("vimal" + newValue);
        //     //  vm.data = newValue;
        // });

        console.log($scope.chartData.length + "--- Shared data ---" + chartData.data.length);
        /*
                sharedDataService.getFullData()
                    .then(function(chartData) {*/



        // $scope.data = function() {
        //     var chartData = sharedDataService.getData();
        //     $scope.data = chartData.data;
        //     return chartData.data;
        // }
        // $scope.data();
        //        console.log("$scope.data" + $scope.data)

        vm.chartData = chartData;
        var data = chartData.data;
        //  $scope.chartData = data;

        vm.calculate = function(data) {
            $scope.reset = function() {
                // Example with 1 argument
                vm.data = angular.copy($scope.master);
            };
            $scope.reset();
            // vm.data = datas;
            console.log("datas" + vm.data);
            $scope.data1 = data;


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
                    (Churn == 0) ? vm.data[0].values[2].value++: vm.data[1].values[2].value++;
                }
                if (State == "Massachusetts") {
                    (Churn == 0) ? vm.data[0].values[3].value++: vm.data[1].values[3].value++;
                } //don't forget to add the base 
                if (State == "Ohio") {
                    (Churn == 0) ? vm.data[0].values[4].value++: vm.data[1].values[4].value++;
                }
                if (State == "Arkansas") {
                    (Churn == 0) ? vm.data[0].values[5].value++: vm.data[1].values[5].value++;
                }
                if (State == "New York") {
                    (Churn == 0) ? vm.data[0].values[6].value++: vm.data[1].values[6].value;
                }
                if (State == "Washington") {
                    (Churn == 0) ? vm.data[0].values[7].value++: vm.data[1].values[7].value++;
                }
            }
        }
        var a = vm.calculate(data);
        /*       });
                //   };
        */



        $scope.getTotalTodos = function() {
            console.log(vm.data + "$scope.chartData.length" + $scope.chartData.length);
            //            vm.data = $scope.chartData;
            //vm.calculate($scope.chartData);
            return $scope.chartData;
        };
        var deregister = $rootScope.$on(
            "EmitingData",
            function() {
                console.log("datas" + datas);
                $scope.chartData = sharedDataService.getData().data;
                console.log("inside emit    " + $scope.chartData);
                console.log(chartData.data + "Responding to event %s.", chartData);
                vm.data = "";
                //    vm.data = datas;
                $scope.reset = function() {
                    // Example with 1 argument
                    vm.data = angular.copy($scope.master);
                    return vm.data;
                };
                $scope.reset();
                // $scope.$watch(function() { chartData }, function(newValue, oldValue) {
                //     $scope.data = chartData;
                //     console.log("vimal" + newValue);
                //     //  vm.data = newValue;
                // });

                $scope.getTotalTodos();

                function calculating(chartData) {
                    //    vm.data = datas;
                    data = "";
                    $scope.reset();
                    data = $scope.chartData;
                    console.log(vm.data + " inside calculating " + $scope.chartData);

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
                            (Churn == 0) ? vm.data[0].values[2].value++: vm.data[1].values[2].value++;
                        }
                        if (State == "Massachusetts") {
                            (Churn == 0) ? vm.data[0].values[3].value++: vm.data[1].values[3].value++;
                        } //don't forget to add the base 
                        if (State == "Ohio") {
                            (Churn == 0) ? vm.data[0].values[4].value++: vm.data[1].values[4].value++;
                        }
                        if (State == "Arkansas") {
                            (Churn == 0) ? vm.data[0].values[5].value++: vm.data[1].values[5].value++;
                        }
                        if (State == "New York") {
                            (Churn == 0) ? vm.data[0].values[6].value++: vm.data[1].values[6].value;
                        }
                        if (State == "Washington") {
                            (Churn == 0) ? vm.data[0].values[7].value++: vm.data[1].values[7].value++;
                        }
                    }
                    $scope.$apply();

                }


                calculating(chartData);
                $scope.$apply();
                //$rootScope.$digest();

            }
        );



    }

})();