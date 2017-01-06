(function() {
    'use strict';
    angular.module('app')
        .service('sharedDataService', [
            '$q', '$http', '$log',
            sharedDataService
        ]);

    function sharedDataService($q, $http, $log) {


        return {

            loadAllItems: function() {
                var deferred = $q.defer();
                $http.get('app/components/jsonData/bacys.csv')
                    .success(function(data) {

                        // split content based on new line
                        var allTextLines = data.split(/\r\n|\n/);
                        console.log(allTextLines);
                        var headers = allTextLines[0].split(',');

                        var lines = [];
                        for (var i = 0; i < allTextLines.length; i++) {
                            // split content based on comma
                            var data = allTextLines[i].split(',');
                            if (data.length == headers.length) {
                                var tarr = [];
                                for (var j = 0; j < headers.length; j++) {
                                    tarr.push(data[j]);
                                }
                                lines.push(tarr);
                            }

                            console.log("Data : " + data);
                        }

                        data = lines;
                        console.log("Data : " + data);

                    })
                    // .then(function(data) {
                    //     deferred.resolve({ data: data });
                    // })
                    .error(function(msg, code) {
                        deferred.reject(msg);
                        //$log.error(msg, code);
                    });
                //$log(deferred.promise);

                console.log(deferred.promise);

                return deferred.promise;
            },

            processData: function(allText) {
                // split content based on new line
                var allTextLines = allText.split(/\r\n|\n/);
                var headers = allTextLines[0].split(',');
                var lines = [];

                for (var i = 0; i < allTextLines.length; i++) {
                    // split content based on comma
                    var data = allTextLines[i].split(',');
                    if (data.length == headers.length) {
                        var tarr = [];
                        for (var j = 0; j < headers.length; j++) {
                            tarr.push(data[j]);
                        }
                        lines.push(tarr);
                    }
                }
                data = lines;
            }



        }
    }

})();