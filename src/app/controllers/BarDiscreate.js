(function() {
    angular
        .module('app')
        .controller('BarDiscreateController', ['sharedDataService',
            'tableService',
            BarDiscreateController
        ]);

    function BarDiscreateController(sharedDataService, tableService) {
        var vm = this;
        //Each bar represents a single discrete quantity.
        vm.discreateBarData = [{
            key: "Spend by Tendur in Months",
            values: [{
                    "label": "Less than 10",
                    "value": 0
                },
                {
                    "label": "10 to 15",
                    "value": 0
                },
                {
                    "label": "15 to 20",
                    "value": 0
                },
                {
                    "label": "20 to 25",
                    "value": 0
                },
                {
                    "label": "Above 25",
                    "value": 0
                }
            ]
        }];

        console.log("data discreate" + vm.discreateBarData[0].values[0].value);


        /***  getting data from server/csv and manipulate with chart */
        //   vm.getChartData = function() {
        sharedDataService.loadAllItemsFromCsv()
            .then(function(chartData) {
                vm.chartData = chartData;
                console.log("bar chartGetting data" + chartData);


                var count = 0;
                var data = chartData.data;

                vm.calculateSum = function(data) {
                    for (var i = 0; i < data.length; i++) {
                        var Tenure_Range = data[i].Tenure_Range;
                        console.log("Tenure_Range" + Tenure_Range);
                        if (Tenure_Range == " Less than 10 ") {
                            vm.discreateBarData[0].values[0].value = vm.discreateBarData[0].values[0].value + 2;
                        } //don't forget to add the base 
                        if (Tenure_Range == " 10 to 15 ") {
                            vm.discreateBarData[0].values[1].value = vm.discreateBarData[0].values[1].value + 1;
                        }
                        if (Tenure_Range == " 15 to 20 ") {
                            vm.discreateBarData[0].values[2].value = vm.discreateBarData[0].values[2].value + 1;
                        }
                        if (Tenure_Range == " 20 to 25 ") {
                            vm.discreateBarData[0].values[3].value = vm.discreateBarData[0].values[3].value + 1;
                        } //don't forget to add the base 
                        if (Tenure_Range == " Above25 ") {
                            vm.discreateBarData[0].values[4].value = vm.discreateBarData[0].values[4].value + 1;
                        }
                        console.log(data[i].Tenure_Range + "Tender count ");
                    }
                }
                vm.calculateSum(data);
            });
        //   };

        //   vm.barDiscreateServiceReturn = tableService.loadDiscreateBarValue();
        var discreateBarData = [];
        //  discreateBarData.push({ key: "vimal", values: vm.barDiscreateServiceReturn });

        //  vm.discreateBarData = discreateBarData;
        console.log(vm.discreateBarData);




        // TODO: move data to the service krispo

        vm.options = {
            chart: {
                type: 'discreteBarChart',
                height: 350,
                x: function(d) { return d.label; },
                y: function(d) { return d.value; },
                showValues: true,
                valueFormat: function(d) { return d3.format(',.4f')(d); },
                dispatch: {
                    tooltipShow: function(e) { console.log('! tooltip SHOW !') },
                    tooltipHide: function(e) { console.log('! tooltip HIDE !') },
                    beforeUpdate: function(e) { console.log('! before UPDATE !') }
                },
                discretebar: {
                    dispatch: {
                        elementClick: function(e) {
                            var e = e;
                            console.log("! element Click !" + e);
                        },
                        elementDblClick: function(e) { console.log("! element Double Click !") }
                    }
                },
                callback: function(e) { console.log('! callback !') }
            }

        };


    }
})();