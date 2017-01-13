(function() {
    angular
        .module('app')
        .controller('PieController', ['sharedDataService',
            PieController
        ]);

    function PieController(sharedDataService) {
        var vm = this;

        vm.data = [{
                key: "Male",
                y: 0
            },
            {
                key: "Female",
                y: 0
            },
            {
                key: "Others",
                y: 0
            }

        ];

        // vm.calculateX = function() {
        sharedDataService.loadAllItemsFromCsv()
            .then(function(chartData) {
                // var obj = JSON.parse(chartData);
                // vm.chartData = obj;
                vm.chartData = chartData;
                var data = chartData.data;

                vm.calculateSum = function(data) {
                        for (var i = 0; i < data.length; i++) {
                            var sex = data[i].SEX;
                            if (sex == 1) {
                                vm.data[0].y = vm.data[0].y + 1;
                            } //don't forget to add the base 
                            if (sex == 2) {
                                vm.data[1].y = vm.data[1].y + 1;
                            }
                            if (sex == 3) {
                                vm.data[2].y = vm.data[2].y + 1;
                            }
                        }
                    }
                    // console.log(count);
                    //   console.log("Getting chartData" + chartData.data.length);

                vm.calculateSum(data);



            });

        //   }



        vm.options = {
            chart: {
                type: 'pieChart',
                height: 300,
                x: function(d) { return d.key; },
                y: function(d) { return d.y; },
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                },
                //chart events
                pie: {
                    dispatch: {
                        // chartClick: function(e) {
                        //     console.log("clicked");
                        // },
                        elementClick: function(e) {
                            var a;;
                            console.log("clicked" + e.data.key)
                        }

                    }
                },
            }
        };














    }
})();