<style type='text/css'>
  #body_${id}{margin:0;font-size:14px;font-family:"Helvetica Neue",Helvetica}
  .node circle{cursor:pointer;stroke-width:1.5px}.node text{font-size:11px}
    path.link{fill:none;stroke:#ccc;stroke-width:1.5px}
 
  .ui-multiselect{padding:2px 0 2px 4px;text-align:left}.ui-multiselect span.ui-icon{float:right}.ui-multiselect-single .ui-multiselect-checkboxes input{position:absolute!important;top:auto!important;left:-9999px}.ui-multiselect-single .ui-multiselect-checkboxes label{padding:5px!important}.ui-multiselect-header{margin-bottom:3px;padding:3px 0 3px 4px}.ui-multiselect-header ul{font-size:.9em}.ui-multiselect-header ul li{float:left;padding:0 10px 0 0}.ui-multiselect-header a{text-decoration:none}.ui-multiselect-header a:hover{text-decoration:underline}.ui-multiselect-header span.ui-icon{float:left}.ui-multiselect-header li.ui-multiselect-close{float:right;text-align:right;padding-right:0}.ui-multiselect-menu{display:none;padding:3px;position:absolute;z-index:10000;text-align:left}.ui-multiselect-checkboxes{position:relative;overflow-y:auto}.ui-multiselect-checkboxes label{cursor:default;display:block;border:1px solid transparent;padding:3px 1px}.ui-multiselect-checkboxes label input{position:relative;top:1px}.ui-multiselect-checkboxes li{clear:both;font-size:.9em;padding-right:3px}.ui-multiselect-checkboxes li.ui-multiselect-optgroup-label{text-align:center;font-weight:700;border-bottom:1px solid}.ui-multiselect-checkboxes li.ui-multiselect-optgroup-label a{display:block;padding:3px;margin:1px 0;text-decoration:none}* html .ui-multiselect-checkboxes label{border:none}
</style>
<div id ='mega${id}'>
<table id='dataGroup_${id}'></table>

<div id='body_${id}'></div>

</div>
<div class='elx-script'>


 var view=elx.host.getViewById("${id}");
 var viewId = view.id;
  var div = $("#mega${id}");
 console.log("early div",div);
 var cfgoptions = view.typeinfo;
 var f = view.typeinfo.data;
 var margin = [cfgoptions.marginB, cfgoptions.marginL, cfgoptions.marginT, cfgoptions.marginR],
     width = cfgoptions.width - margin[1] - margin[3],
     height = cfgoptions.height - margin[0] - margin[2];
	  var frameWidth = view.typeinfo.frameWidth;
	var frameHeight = view.typeinfo.frameHeight;
	
 var formatClassKey = cfgoptions.formatClassKey,
     formatClassCast = cfgoptions.formatClassCast,
     formatPrefixCast = cfgoptions.formatPrefixCast;
 if (formatClassKey == 'formatClassCast') {
     var formatClass;
     eval(formatClassCast);
 }
 var formatClass = {
     '1': {
         'cToggleAccept': 'All', //salary
         'formatValueByCategory': function(arr) {
             return sum(arr);
         },
         'formatValueOutlook': function(val) {
             return ' ' + d3.round(prefixClass['1']('Size').scale(val), 2) + prefixClass['1']('Size').symbol;
         }
     },
     '2': {
         'cToggleAccept': 'All', //
         'formatValueByCategory': function(arr) {
             return sum(arr);
         },
         'formatOutlook': function(val) {
             return ' ' + d3.round(prefixClass['2']('Size').scale(val), 2) + prefixClass['2']('Size').symbol;
         }
     },
     '3': {
         'cToggleAccept': 'Sales', //
         'formatValueByCategory': function(arr) {
             return sum(arr);
         },
         'formatOutlook': function(val) {
             return ' ' + d3.round(prefixClass['3']('Size').scale(val), 2) + prefixClass['3']('Size').symbol;
         }
     }
 };
 
 var initializedCMap = {};

 var safeRead;var cutTableName; var getArr;
 var cTypeClassOutput;
  var  extendArr, arrToHex1;
  var hexToModel1,processCFields,modelToHex,groupByFn,chartPreGen,initializeToolTip,settingFrame,configNavBar;

  debugFn();
 // get Data
 if (view.data.jsonClass === "DataEmbedded") {
     rawdata = [
         ["Sales", "John 1", "A", "John", 2000, 30, 52],
         ["Sales", "John 1", "A", "John", 2000, 30, 52],
         ["Sales", "John 1", "A", "John", 2000, 30, 52],
         ["Sales", "Gary 1", "A", "Gary", 3000, 30, 52],
         ["Sales", "Gary 1", "A", "Gary", 2500, 90, 41],
         ["Sales", "Jim 1", "B", "Jim", 2000, 30, 40],
         ["Sales", "Jim 1", "B", "Jim", 1790, 30, 40],
         ["Sales", "Tooi 1", "B", "Tooi", 4000, 58, 79],
         ["Driver", "Fope 1", "J", "Fope", 1000, 90, 0],
         ["Driver", "Fope 1", "J", "Fope", 1000, 90, 0],
         ["Driver", "Fope 1", "J", "Fope", 1000, 90, 0],
         ["Driver", "Goot 1", "J", "Goot", 1000, 90, 0],
         ["Driver", "Goot 1", "J", "Goot", 1000, 90, 0],
         ["Driver", "Bill 1", "K", "Bill", 1000, 90, 0],
         ["Driver", "Bill 1", "K", "Bill", 1000, 90, 0],
         ["Driver", "Bill 1", "K", "Bill", 1000, 90, 0]
     ];

     var extendedArr = rawdata;
     var reduceCToggleArr = extendedArr;
 } else {
     rawdata = ${data};
     var extendedArr = extendArr(rawdata, f, view);
 }
 console.log("rawdata", JSON.stringify(rawdata));
 //need ** to write a function to deal with Description Column


 console.log("before debugFn");
  console.log("f",f);

  var data1 = arrToHex1(extendedArr, f, view,initializedCMap);
 var legendKey = 'lastGroupby_op';
 var formatLegendCast = "";
console.log("data Hex",data1[0]);

 var data2=modelAddCMap(data1,initializedCMap);
 console.log("data AddCMap[0]",data2[0]);
 var data2 = hexToModel1(data2, legendKey, formatLegendCast, view);
 console.log("data2 model",JSON.stringify(data2));
 var nestArr = (cfgoptions.nestArr != null) ? (cfgoptions.nestArr).split(",") : autoDetectNestArr(f, view);
var rootObj={};
var Fselect={};
var ToolTipContainer={};
  var groupCount = 0;
  var dataGroupHex="#dataGroup_"+viewId;
  var maxBubbleSize=50;
  var linkSize=170;
 chartPreGen(data2,rootObj, Fselect);
  initializeFselect(f, view, nestArr, groupCount,Fselect,ToolTipContainer);
 
    //render Chart
    chart = federalChart()
	  .viewId(viewId)
	  .width(width)
	  .height(height)
	  .margin(margin)
	  .root(rootObj)
	  .groupCount(groupCount)
	  .dataGroupHex(dataGroupHex)
  	  .linkSize(linkSize)
  	  .maxBubbleSize(maxBubbleSize)
	  .navBarMinWidth(cfgoptions.navBarMinWidth)
	  .ToolTipContainer(ToolTipContainer)
	  .Fselect(Fselect);
    d3.select("#body_"+viewId).datum([]).call(chart);
	
	settingFrame(frameHeight,frameWidth,view,div,elx);
 
	
 function debugFn() {

         extendArr = function(data, f, view) {	
             //used when you want to use the same columns in operables
             //obtain uniq columnNames
             var colNameMap = {};
             var uniqColName = [];
             var fieldsArr = getArr(f, 'name', view);
             //if(view.typeinfo.cToggleKey=='default') fieldsArr=_.rest(fieldsArr);
             var n = 0; //n is the index of unextended Arr
             for (var i = 0; i < _.size(fieldsArr); i++) {
                 var colAsProperty = fieldsArr[i];

                 //Obtaining colNameMap
                 if (_.size(uniqColName) == 0) {
                     uniqColName.push(colAsProperty);
                     colNameMap[colAsProperty] = i;
                     n = n + 1;
                 } else {
                     var colAsPropertyArr = [colAsProperty];
                     var intersectArr = _.intersection(colAsPropertyArr, uniqColName);
                     if (_.size(intersectArr) == 0) {
                         uniqColName.push(colAsProperty);
                         colNameMap[colAsProperty] = i;
                         n = n + 1;
                     }
                 }
             }

             //using colNameMap to extendArr
             var extendedArr = [];
             _.each(data, function(k, l) {
                 var localArr = [];
                 _.each(fieldsArr, function(o, p) {
                     var indexToChoose = colNameMap[o];
                     localArr.push(k[indexToChoose]);
                 });
                 extendedArr.push(localArr);
             });
             return extendedArr;

         };
   arrToHex1 = function(data, f, view, initializedCMap) {
             var keyLength = f.keys.length;
             var nameArr = getArr(f, 'name', view);
             var opArr = getArr(f, 'op', view);
             var idArr = getArr(f.operable.values, 'id', view);
             var cFieldsObj = {
                 'cToggle': {
                     cKey: 'cToggleEnabled',
                     cKeyField: view.typeinfo.cToggleKey,
                     cDataField: view.typeinfo.data.cToggleTypeCol[0].name,
                     cTrue: function(data, cfieldsObjName, numCFieldObj,groupCount,cFieldsObjSize,initializedCMap){
					 var newField="";
					 return cTypeClassOutput['majority'](data, cfieldsObjName, numCFieldObj,groupCount,cFieldsObjSize,newField, initializedCMap);
					 },
					 cDefault: function(data, cfieldsObjName, numCFieldObj,groupCount,cFieldsObjSize,initializedCMap){
					 var newField="";
					 return cTypeClassOutput['cMapNotDefined'](data, cfieldsObjName, numCFieldObj,groupCount,cFieldsObjSize,newField, initializedCMap);
					 }
						//cDefault is the function to execute with cKey is 'default'
                 },
                 'cDescription': {
                     cKey: 'cDescriptionEnabled',
                     cKeyField: view.typeinfo.cDescriptionKey,
                     cDataField: view.typeinfo.data.cDescriptionCol[0].name,
                     cTrue: function(data, cfieldsObjName, numCFieldObj,groupCount,cFieldsObjSize,initializedCMap){
					
					 },
					 cDefault:function(data, cfieldsObjName, numCFieldObj,groupCount,cFieldsObjSize, initializedCMap){
					 var newField='#{cDescription}';
					 return  cTypeClassOutput['equalsToAnotherField'](data, cfieldsObjName, numCFieldObj,groupCount,cFieldsObjSize,newField, initializedCMap);
					 }
                 }
             };
			
            var propertiesArr = processCFields(data,keyLength, nameArr, opArr, idArr, cFieldsObj, initializedCMap,view);
			 console.log("propertiesArr kl",propertiesArr);
			
				
             var combineArr = [];
             propertiesArr.forEach(function(d, i) {
                 var obj = nameArr[i] + d;
                 combineArr.push(obj);
             })

             var globalArr = [];
             data.forEach(function(d, i) {
                 var localObj = _.object(combineArr, d);
                 globalArr.push(localObj);
             })
			
			 
             return globalArr;

         };

         processCFields = function(data,keyLength, nameArr, opArr, idArr, cFieldsObj, initializedCMap,view) {
             var numCFieldObj = 0;
             var cFieldClass = {};
			 var groupCount=_.size(getArr(view.typeinfo.data.keys,'name',view));
			 var cFieldsObjSize=_.size(_.keys(cFieldsObj));
			 initializedCMap['cFieldsObj']=[];
             for (var propertyName in cFieldsObj) {
                 if (cFieldsObj[propertyName]['cKeyField'] == cFieldsObj[propertyName]['cKey'] && cFieldsObj[propertyName]['cDataField'] != null) 
					{
                     cFieldClass[numCFieldObj] = '#{' + propertyName + '}';   
                     //initializing cMap if need be.
                     cFieldsObj[propertyName]['cTrue'](data, propertyName, numCFieldObj,groupCount,cFieldsObjSize, initializedCMap);
					 numCFieldObj++;
					 initializedCMap['cFieldsObj'].push(cFieldsObj[propertyName]['cType']);
                 }
				 else {
				 cFieldsObj[propertyName]['cDefault'](data, propertyName, numCFieldObj,groupCount,cFieldsObjSize, initializedCMap);
				 }
             }
             
             var keyArr = _.first(nameArr, keyLength + numCFieldObj);
             var colArr = _.last(nameArr, nameArr.length - (keyLength + numCFieldObj));
             var nameArr = _.map(colArr, function(num, i) {
                 return opArr[i] + "(" + num + ")";
             });
            
             var keyLArr = d3.range(0, keyLength + numCFieldObj);
             var propertiesArr = [];
             keyLArr.forEach(function(d, i) {
                 var obj = (typeof cFieldClass[i] != 'undefined') ? cFieldClass[i] : '#{groupby' + (i - 1) + '}';
                 propertiesArr.push(obj);
             })
			 var bracIdArr=_.map(idArr,function(m){
			 return '#['+m+']';
			 });
			propertiesArr=propertiesArr.concat(bracIdArr);

             return propertiesArr;
         };
		  cTypeClassOutput = {
                 'majority': function(data, cfieldsObjName, positionIndex,groupCount,cFieldsObjSize,newField, initializedCMap) {
                     var cMaj = [];
                     _.each(data, function(d) {
                         cMaj.push(d[positionIndex]);
                     });
                     var cUniq = _.uniq(cMaj);
                     var cToggleCount = _.countBy(cMaj, function(types) {
                         var Ttype;
                         _.each(cUniq, function(m) {
                             if (types == m) Ttype = m;
                         });
                         return Ttype;
                     });
					
                     console.info("cToggleCount Type", cToggleCount);
                     for (var propertyName in cToggleCount) {
                         initializedCMap[cfieldsObjName] = (typeof initializedCMap['cToggleType'] == 'undefined') ?
                             propertyName : (initializedCMap[cfieldsObjName][cToggleType] > initializedCMap[cfieldsObjName][propertyName]) ? initializedCMap[cfieldsObjName] : propertyName;
                     }

                 },
                 'uniqToAnotherField': function(data, cfieldsObjName, positionIndex,groupCount,cFieldsObjSize,newField, initializedCMap) {
					
					//positionIndex is the positionIndex is position of the cfield in JSON-array
					var uniqDescription=[];
					var uniqMap={};
					_.each(data,function(d,i) {//JSON with only two fields
						var pegIndex= cFieldsObjSize+groupCount-1;
						
						if(i==0) {uniqDescription.push(d[positionIndex]);			
						var pegName=d[pegIndex];
						var desName=d[positionIndex];
						uniqMap[pegName]=desName;
						}
						else if (_.size(_.intersection(uniqDescription,[d[positionIndex]]))== 0){
						uniqDescription.push(d[positionIndex]);
						var pegName=d[pegIndex];
						var desName=d[positionIndex];
						uniqMap[pegName]=desName;
						}
						});
						initializedCMap[cfieldsObjName]={};
						initializedCMap[cfieldsObjName]['lookup']='groupby'+groupCount;
						initializedCMap[cfieldsObjName]['map']=uniqMap;
						initializedCMap[cfieldsObjName]['newField']=newField;
                 },
				 'cMapNotDefined': function(data, cfieldsObjName, positionIndex,groupCount,cFieldsObjSize,newField, initializedCMap) {
				 
				 },
				 'equalsToAnotherField':function(data, cfieldsObjName, positionIndex,groupCount,cFieldsObjSize,newField, initializedCMap) {
				var uniqDescription=[];
					var uniqMap={};
					_.each(data,function(d,i) {//JSON with only two fields
						var pegIndex= cFieldsObjSize+groupCount-1;
						
						if(i==0) {uniqDescription.push(d[positionIndex]);			
						var pegName=d[pegIndex];
						var desName=d[pegIndex];
						uniqMap[pegName]=desName;
						}
						else if (_.size(_.intersection(uniqDescription,[d[positionIndex]]))== 0){
						uniqDescription.push(d[positionIndex]);
						var pegName=d[pegIndex];
						var desName=d[pegIndex];
						uniqMap[pegName]=desName;
						}
						});
						initializedCMap[cfieldsObjName]={};
						initializedCMap[cfieldsObjName]['lookup']='groupby'+groupCount;
						initializedCMap[cfieldsObjName]['map']=uniqMap;
						initializedCMap[cfieldsObjName]['newField']=newField;
				 },
             };
         hexToModel1 = function(data, legendKey, formatLegendCast, view) {
             var ReadArray, columnNameArray, model_keyArray, objKey;
             ReadArray = [];

             objKey = Object.keys(data[0]);
			 console.log("objKey kl",objKey);
			 console.log("data kl",data[0]);
             model_keyArray = [];
             columnNameArray = [];
             var keyArray = [];
             //legendFormating
             var formatLegend; //formatLegend should be a class containing the Legend format for each model 
             if (formatLegendCast === "" && legendKey === "formatLegend")
                 console.info("Enter formatLegend");
             if (legendKey === "formatLegend") {
                 console.info("proceed");
                 eval(formatLegendCast);
             }
             if (view.typeinfo.data.operable.values[0].id === "columnInducedGroupby.L1" && formatLegendCast === "") {

                 formatLegend = {
                     'columnInducedGroupby.L1': function(dataZero) {
                         return dataZero.columnNameWithoutOp;
                     }
                 };
             }

             //-end legendFormating
             objKey.forEach(function(key) {
                 var columnNameObj, model_keyObj;
                 if ((_.str.include(key,'|') == false) && (_.str.include(key,'#{') == false)) {
                     keyArray.push(key);
                 } else {
                     return;
                 }


             });
             console.log("inside keyArray", JSON.stringify(keyArray));
             data.forEach(function(d, i) {
                 var Category, ColumnName, GroupNameArr, Model, ReadObj, Value, lastGroupby, propertyName,Description;
                 ReadObj = {};
                 Value = void 0;
                 ColumnName = void 0;
                 Category = void 0;
                 Model = void 0;
                 lastGroupby = void 0;
				 Description= void 0;
                 GroupNameArr = [];
                 for (propertyName in d) {
                     if (_.str.include(propertyName,'xaxis') === true) {
                         Category = d[propertyName];
                     }
                     if (_.str.include(propertyName,'groupby') === true) {
                         lastGroupby = d[propertyName];
                         GroupNameArr.push(lastGroupby);
                     }
					      if (_.str.include(propertyName,'Description') === true) {
                         Description = d[propertyName];
                     }
                 }
                 var dataZero = [];
                 keyArray.forEach(function(modelKey, n) {
                     var allGroupby, lastGroupby_op, model_keyObj, model_keyObjArr, model_yAxisObj, objPush;
                     for (propertyName in d) {
                         if (_.str.include(propertyName,modelKey) === true) {
                             model_keyObj = propertyName.replace(/.*\[|\]/g, "");
                             model_keyObjArr = model_keyObj.split(".");
                             model_yAxisObj = (model_keyObjArr.length > 1 ? model_keyObjArr[1] : "1");
                             //-end
                             objPush = {
                                 model: model_keyObjArr[0],
                                 yAxis: model_yAxisObj,                                                    
                                 value: d[propertyName],
                                 category: Category,
								 description: Description
                             };
                             GroupNameArr.forEach(function(d, m) {
                                 propertyName = "groupby" + (m + 1);
                                 objPush[propertyName] = d;
                             });
                             if (legendKey === "lastGroupby_op") {
                                 lastGroupby_op = lastGroupby;
                                 objPush["legendKey"] = lastGroupby_op;
                                 ReadArray.push(objPush);
                             } else if (legendKey === "allGroupby") {
                                 allGroupby = GroupNameArr.join("_");
                                 objPush["legendKey"] = allGroupby;
                                 ReadArray.push(objPush);
                             } else if (legendKey == "op(ColumnName)") {
                                 objPush["legendKey"] = cName;
                                 ReadArray.push(objPush);
                             } else if (legendKey == "formatLegend") {
                                 if (i == 0) console.log("objPush for Legend", JSON.stringify(objPush));
                                 objPush["legendKey"] = formatLegend[model_keyObj](objPush);
                                 ReadArray.push(objPush);
                             } else if (legendKey == "ColumnName") {
                                 var regExp = /\(([^)]+)\)/;
                                 var matches = regExp.exec(cName);
                                 objPush["legendKey"] = matches[1];
                                 ReadArray.push(objPush);
                             }
                         }
                     }
                 });
             });
             return ReadArray;
         };
         modelAddCMap=function(modelData,initializedCMap){
			var result=modelData;
		
		 for (var propertyName in initializedCMap){
		  if(typeof initializedCMap[propertyName]['lookup'] !='undefined') {
		  		var lookUpProperty;
				_.each(Object.keys(modelData[0]),function(m,n){
					if (_.str.include(m,initializedCMap[propertyName]['lookup']))
				lookUpProperty=m;
				});
				result=_.map(result,function(d,i){
			var sampleObj=_.clone(d);
			var newFieldValue=initializedCMap[propertyName]['map'][d[lookUpProperty]];
			var newFieldName=initializedCMap[propertyName]['newField'];
			sampleObj[newFieldName]=newFieldValue;
			return sampleObj;
			});
			}
		 }
		 return result;
		 };
		 modelToHex = function(modelData, groupByArr) {
             var hexData = [];
             var nest = d3.nest();
             _.each(groupByArr, function(m, n) {
                 nest=nest.key(function(d) {
                     return d[m];
                 });
             });
             nest.rollup(function(d) {
                 var uniqModel = _.uniq(_.pluck(d, 'model'));
                 var sampleObj = _.clone(d[0]);
                 _.each(uniqModel, function(m) {
                     sampleObj[m] = _.pluck(_.where(d, {
                         'model': m
                     }), 'value')[0];
                 });
                 //remove fields that won't be needed
                 _.each(['yAxis', 'value', 'model','category'], function(n) {
                     delete sampleObj[n];
                 });
                 hexData.push(sampleObj);
             });
			 nest.entries(modelData);
             return hexData;
         };
         //--Enhanced Logic for UI to make chart smarter
         autoDetectNestArr = function(f, view) {
             var nameArr = getArr(f.operable.values, 'name', view);
             nameArr = _.map(nameArr, function(d) {
                 return (_.str.include(d, '.')) ? d.split('.')[1] : d;
             });
             return nameArr;
         };
         //--End,Enhanced Logic for UI to make chart smarter
         groupByFn = function(data, groupByArr, formatClass) {
             var aggreData, nest;
             nest = d3.nest();
             aggreData = [];
             _.each(groupByArr, function(m, n) {
                 nest.key(function(d) {
                     return d[m];
                 });
             });
             var result = [];
             nest.rollup(function(k) {
                 var sampleObj = _.clone(k[0]);
                 if (typeof safeRead(formatClass, _.pluck(k, 'yAxis'), 'formatValueOutlook') != 'undefined' && view.typeinfo.formatClassKey == 'formatClassCast') {
                     sampleObj['value'] = formatClass[_.pluck(k, 'yAxis')]['formatValueByCategory'](_.pluck(k, 'value'));
                 } else sampleObj['value'] = d3.sum(k, function(g) {
                     return g.value;
                 });
                 if (typeof safeRead(formatClass, _.pluck(k, 'yAxis'), 'formatValueOutlook') != 'undefined' && view.typeinfo.formatClassKey == 'formatClassCast') {
                     sampleObj['value'] = formatClass[_.pluck(k, 'yAxis')]['formatValueOutlook'](sampleObj['value']);
                 } else sampleObj['value'] = d3.round(sampleObj['value'], 2);
                 result.push(sampleObj);
             }).entries(data);
             return result;
         };
         //$$$
            chartPreGen = function(modelData,rootObj,Fselect) {
         
             for (var property in modelData[0]) {
                 if (_.str.include(property, 'groupby')) groupCount++;
             }
			 
			 groupCount=2;
             groupbyRange = _.map(_.range(1, groupCount + 1), function(m) {
                 return 'groupby' + m;
             });
             var groupByArr = ['model'];
             var groupByArr = _.union(groupByArr, groupbyRange);

             var aggregateData = groupByFn(modelData, groupByArr);
             var modelToHexData = modelToHex(aggregateData, groupbyRange);
			 console.log("modelToHexData",JSON.stringify(modelToHexData));
             var nest=d3.nest();
             _.each(groupbyRange, function(m, n) {
                 nest=nest.key(function(d, i) {
                     return d[m];
                 });
             });
			
             rootObj['values'] = nest.entries(modelToHexData);

             color= ["#bd0026", "#fecc5c", "#fd8d3c", "#f03b20", "#B02D5D",
                 "#9B2C67", "#982B9A", "#692DA7", "#5725AA", "#4823AF",
                 "#d7b5d8", "#dd1c77", "#5A0C7A", "#5A0C7A"
             ];

             rootObj['x0'] = height / 2;
            rootObj['y0'] = 0;
			
			Fselect.sourceField=_.union(['description'],groupbyRange);
    

         };
  initializeFselect = function(f, view, nestArr, groupCount,Fselect,ToolTipContainer) {
             var modelYAxisMap = getArr(f.operable, 'id', view);
             modelYAxisMap = _.map(modelYAxisMap, function(d) {
                 var obj = {};
                 var propertyName = d.split('.')[1];
                 obj[propertyName] = d.split(".")[0];
                 return obj;
             });
			console.log('modelYAxisMap kop',modelYAxisMap);
			
                //if cToggleType matches with formatClass' cToggleAccept then append the model into ToolTipContainer
             if (formatClassKey == 'formatClassCast') {
                 for (var propertyName in formatValue) {
                     if (formatClass[propertyName]['cToggleAccept'] == 'All' || formatClass[propertyName]['cToggleAccept'] == cToggleType) {
                         ToolTipContainer[propertyName]=_.values(modelYAxisMap[propertyName])[0];
                     }
                 }
             } else {
                 for (var propertyName in modelYAxisMap) {
                      ToolTipContainer[propertyName]=_.values(modelYAxisMap[propertyName])[0];
                 }
             }

             var fSelectNameArr = _.map(_.values(ToolTipContainer), function(d) {
                 return 'sum_' + d;
             }); // add 'sum_' infront
			 
             Fselect['spendField'] = fSelectNameArr[0];
             Fselect['actField'] = fSelectNameArr[0];
             Fselect['sumField'] = _.values(ToolTipContainer);

         };

		safeRead = function() {
			var current, formatProperty, obj, prop, props, val, _i, _len;

			obj = arguments[0], props = 2 <= arguments.length ? [].slice.call(arguments, 1) : [];

			read = function(obj, prop) {
				if ((obj != null ? obj[prop] : void 0) == null) {
					return;
				}
				return obj[prop];
			};

			current = obj;
			for (_i = 0, _len = props.length; _i < _len; _i++) {
				prop = props[_i];

				if (val = read(current, prop)) {
					current = val;
				} else {
					return undefined;
				}
			}
			return current;
		};
  
   getArr =function(obj, k, view) { //used on view.typeinfo to get an array of property value of the propertyName 'name'
     var objects = [];
     for (var i in obj) {
         if (!obj.hasOwnProperty(i)) continue;
         if (typeof obj[i] == 'object') {
             objects = objects.concat(getArr(obj[i], k, view));
         } else if (_.str.include(i,k) == true) {
		
             if (k == "name") {
                 objects.push(cutTableName(obj[i], view));
             } else
                 objects.push(obj[i]);
         }
     }
	
     return objects;
 };
    cutTableName=function(stringText,view) {
		
      var uniTable = (view.data.jsonClass === "DataAdhocTable") ? view.data.fields[0].table + "." : null;
      var colm = (uniTable == null) ? stringText : stringText.split(uniTable)[1];
      return colm;
  };
	settingFrame=function(frameHeight,frameWidth,view,div,elx){
	 d3.select("#mega"+view.id).style("overflow",'scroll').style("height",frameHeight+"px").style("width",frameWidth+"px");
  	console.log("div",div);
   	elx.host.setupAutoResize(div, function(w,h){
  
	console.log("d3selectMega",d3.select("#mega"+view.id));
	console.log("w:",w);
  	if(w !== view.typeinfo.frameWidth || h != view.typeinfo.frameHeight){
  	d3.select("#mega"+view.id).style("overflow",'scroll').style("height",h+"px").style("width",w+"px");
  		}
    });
	
	
	};

     }

  
</div>