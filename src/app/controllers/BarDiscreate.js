(function () {
    angular
        .module('app')
        .controller('BarDiscreateController', [
        'tableService',
            BarDiscreateController
        ]);

    function BarDiscreateController(tableService) {
        var vm = this;


 vm.barDiscreateServiceReturn = tableService.loadDiscreateBarValue();
   
   var discreateBarData=[];
   discreateBarData.push({key:"vimal",values:vm.barDiscreateServiceReturn});
   
   vm.discreateBarData=discreateBarData;
   console.log(vm.discreateBarData);
   

//Each bar represents a single discrete quantity.
 vm.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "A" ,
                        "value" : 29.765957771107
                    } ,
                    {
                        "label" : "B" ,
                        "value" : 0
                    } ,
                    {
                        "label" : "C" ,
                        "value" : 32.807804682612
                    } ,
                    {
                        "label" : "D" ,
                        "value" : 196.45946739256
                    } ,
                    {
                        "label" : "E" ,
                        "value" : 23.19434030906893
                    } ,
                    {
                        "label" : "F" ,
                        "value" : 98.079782601442
                    } ,
                    {
                        "label" : "G" ,
                        "value" : 18.079782601442
                    } ,
                    {
                        "label" : "H" ,
                        "value" : 98.079782601442
                    } ,
                    {
                        "label" : "I" ,
                        "value" : 98.079782601442
                    }
                ]
            }
        ];
       
console.log(vm.data);

       
        // TODO: move data to the service

vm.options = {
  
chart: {
                type: 'discreteBarChart',
                height: 350,
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showValues: true,
                valueFormat: function(d){ return d3.format(',.4f')(d); },
                dispatch: {
                  tooltipShow: function(e){ console.log('! tooltip SHOW !')},
                  tooltipHide: function(e){console.log('! tooltip HIDE !')},
                  beforeUpdate: function(e){ console.log('! before UPDATE !')}
                },
                discretebar: {
                  dispatch: {
                    elementClick: function(e) {
                    var e=e;
                        console.log("! element Click !"+e);
                    },
                    elementDblClick: function(e) {console.log("! element Double Click !")}
                  }
                },
                callback: function(e){console.log('! callback !')}
            }

};











    }
})();
