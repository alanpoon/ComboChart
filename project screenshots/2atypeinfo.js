{
   "jsonClass":"Bundle",
   "type":"ComboChart",
   "data":{
      "series":{
         "sort":"series-asc"
      },
      "keys":{
         "sort":"key-asc"
      },
      "fields":{
         "cToggleTypeCol":[
            {
               "name":"ds_2b_vehcost_tonnage.PerRecord"
            }
         ],
         "keys":[
            {
               "name":"ds_2b_vehcost_tonnage.PeriodEnding"
            },
            {
               "name":"ds_2b_vehcost_tonnage.vehiclenumber"
            }
         ],
         "operable":{
            "values":[
               {
                  "id":"columnStackGroup.L1",
                  "name":"ds_2b_vehcost_tonnage.Diesel",
                  "op":"sum"
               },
               {
                  "id":"columnStackGroup.L1",
                  "name":"ds_2b_vehcost_tonnage.Maintenance",
                  "op":"sum"
               },
               {
                  "id":"columnStackGroup.L1",
                  "name":"ds_2b_vehcost_tonnage.Manpower",
                  "op":"sum"
               },
               {
                  "id":"dotGroupby.R2",
                  "name":"ds_2b_vehcost_tonnage.Tonnage",
                  "op":"sum"
               }
            ]
         }
      }
   },
   "width":"500",
   "height":"510",
   "dataGroupKey":"timePeriodOptions",
   "title":"Vehicle Cost($) with Tonnage",
   "subtitle":"",
   "yAxisArray":"Cost($),Tonnage",
   "colorSeriesArray":"#7cb5ec,#434348,#90ed7d,#f7a35c,#ffc0cb,#f15c80,#e4d354,#8085e8,#8d4653,#91e8e1,#d89b00,#9fb27e,#c6c6cd,#284040,#5ead06",
   "interpolateXAxisKey":"default",
   "seriesInsertKey":"default",
   "formatSeriesInsertCast":"",
   "xTicksKey":"string",
   "formatXTicksCast":"",
   "orderingKey":"monthString",
   "formatOrderingCast":"",
   "interpolateGroupbyKey":"default",
   "fixedGroupbyClassCast":"fixedGroupbyClass={'groupby1':['asd']}",
   "formatLegendCast":"formatLegend={'columnStackGroup.L1': function(d) {   return d.columnNameWithoutOp;   },'dotGroupby.R2': function(d) {   return 'Tonnage '+d.groupby1;   } };",
   "legendKey":"formatLegend",
   "cToggleKey":"default",
   "toolTipKey":"formatToolTip",
   "legendEscortLines":"Gross Profit",
   "typeAntiType":"",
   "formatToolTipCast":"formatToolTip={'columnStackGroup.L1':{valueDecimals:2,valuePrefix:'$',valueSuffix:''},'dotGroupby.R2':{valueDecimals:2,valuePrefix:'',valueSuffix:' Tons'}}",
   "inducedKey":"default",
   "formatInducedCast":"",
   "valueOperationKey":"default",
   "formatValueOperationCast":"operation.prototype.value=function(){ return [this.A-this.B];}",
   "formatValueOperationArg":"A",
   "xTicksRotation":"0"
}