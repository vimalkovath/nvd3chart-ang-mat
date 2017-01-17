(function() {
    angular
        .module('app')
        .controller('MemoryController', ['sharedDataService', '$scope',
            MemoryController
        ]);

    function MemoryController(sharedDataService, $scope) {

        var vm = this;

        //initializing used variables
        // vm.chart

        //getting data
        vm.getChartData = function() {
            sharedDataService.loadAllItemsFromCsv()
                .then(function(chartData) {
                    // var obj = JSON.parse(chartData);
                    // vm.chartData = obj;
                    vm.chartData = chartData;
                });
        };
        vm.count = 0;
        vm.add = function() {
            vm.count = vm.count + 1

        }


        // TODO: move data to the service
        vm.memoryChartData = [{ key: 'memory', y: 42 }, { key: 'free', y: 58 }];

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                pie: {
                    startAngle: function(d) { return d.startAngle / 2 - Math.PI / 2 },
                    endAngle: function(d) { return d.endAngle / 2 - Math.PI / 2 }
                },
                x: function(d) { return d.key; },
                y: function(d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(0, 150, 136)', 'rgb(191, 191, 191)'],
                showLabels: false,
                showLegend: false,
                tooltips: false,
                title: '42%',
                titleOffset: -10,
                margin: { bottom: -80, left: -20, right: -20 }
            }
        };



        //test real reload


        $scope.options = {
            chart: {
                type: 'pieChart',
                donut: true,
                donutRatio: 0.6,
                height: 400,
                x: function(d) { return d.key; },
                y: function(d) { return d.value; },
                transitionDuration: 500
            }
        };

        $scope.data = [];

        var data1 = [{ value: 10, key: 'Label1' }, { value: 2, key: 'Label2' }, { value: 2, key: 'Label3' }];
        var data2 = [{ value: 1, key: 'Label1' }, { value: 20, key: 'Label2' }, { value: 6, key: 'Label3' }];
        var data3 = [{ value: 10, key: 'Change1' }, { value: 6, key: 'Change2' }, { value: 2, key: 'Change3' }, { value: 4, key: 'Change4' }];

        $scope.run = false;

        $scope.dataSet = 'None - Press Start to begin cycling data.';

        var x = 1;

        //setInterval(function() {
        $scope.onSubmit = function() {
                if (!$scope.run) {
                    return;
                }
                if (x === 1) {
                    $scope.data.length = 0;
                    Array.prototype.push.apply($scope.data, data1);
                    $scope.dataSet = 1;
                    $scope.$apply();
                    x++;
                } else if (x === 2) {
                    $scope.data.length = 0;
                    Array.prototype.push.apply($scope.data, data2);
                    $scope.dataSet = 2;
                    $scope.$apply();
                    x++;
                } else if (x === 3) {
                    $scope.data.length = 0;
                    Array.prototype.push.apply($scope.data, data3);
                    $scope.dataSet = 3;
                    $scope.$apply();
                    x = 1;
                }
            }
            //}, 500);


    }
})();