  String.prototype.contains = function(it) { return this.indexOf(it) != -1; };
// Data phase 
 function hexToModel(data,legendKey) {
     var ReadArray = [];
     var objKey = Object.keys(data[0]);
     var model_keyArray = [],
         columnNameArray = [];
     //model_keyArray ["column", "spline", "xaxis"]
     //columnNameArray ["Rainfall", "Temperature", "Categories"]
     objKey.forEach(function(key) {
         if (key.contains("#[") == true) {
             var model_keyObj = key.replace(/.*\[|\]/gi, '');
             var columnNameObj = key.replace(/\#.*/, '');
         } else {
             return
         }
         model_keyArray.push(model_keyObj);
         columnNameArray.push(columnNameObj);
     })
     data.forEach(function(d, i) {
         var ReadObj = {},
             Value, ColumnName, Category, Model, lastGroupby; var GroupNameArr=[];
         for (var propertyName in d) {
             if (propertyName.contains("xaxis") == true) {
                 Category = d[propertyName];
             }
             if (propertyName.contains("groupby") == true) {
                 lastGroupby = d[propertyName];
				 GroupNameArr.push(lastGroupby);
				              }
         }
         columnNameArray.forEach(function(modelKey) {
             for (var propertyName in d) {
                 if (propertyName.contains(modelKey) == true) {
                     var model_keyObj = propertyName.replace(/.*\[|\]/gi, '');
                     var model_keyObjArr = model_keyObj.split(".");
                     model_keyObj = model_keyObjArr[0];
                      model_yAxisObj=(model_keyObjArr.length>1) ? model_keyObjArr[1]:'L1';
					  
					  var cName=propertyName.replace(/\#.*/, '');
                     var objPush = {
                         model: model_keyObj,
						 
                         yAxis: model_yAxisObj,
                         columnName: cName,
                         value: d[propertyName],
                         category: Category
                         //,groupby: Groupby
                     }
					 GroupNameArr.forEach(function(d,i) { 
					 var propertyName='groupby'+(i+1); objPush[propertyName]=d;})
					 
					 if (legendKey=="lastGroupby_op") {
					 var lastGroupby_op=lastGroupby+"_"+cName;
					 objPush["legendKey"]=lastGroupby_op;
                     ReadArray.push(objPush);
					 }
					 else if(legendKey=="allGroupby") {
					 var allGroupby = GroupNameArr.join("_");
					 objPush["legendKey"]=allGroupby;
                     ReadArray.push(objPush);
					 }
					  else if(legendKey=="op(ColumnName)") {
					 objPush["legendKey"]=cName;
                     ReadArray.push(objPush);
					 }
					  else if(legendKey=="ColumnName") {
					  var regExp = /\(([^)]+)\)/;
					  var matches = regExp.exec(cName);
					 objPush["legendKey"]=matches[1];
                     ReadArray.push(objPush);
					 }
                 }
             }
         })
     })
     return ReadArray;
 }

  function arrToHex(data, f,view) {
      var keyLength = f.keys.length;
      var keyLArr = d3.range(0, keyLength);
      var nameArr = getArr(f, 'name',view);
      var opArr = getArr(f, 'op',view);
      var idArr = getArr(f, 'id',view);
      var keyArr = _.first(nameArr, keyLength);
      var colArr = _.last(nameArr, nameArr.length - keyLength);
      var nameArr = _.map(colArr, function(num, i) {
          return opArr[i] + "(" + num + ")";
      });
      nameArr = keyArr.concat(nameArr);
      var propertiesArr = [];
      keyLArr.forEach(function(d, i) {
          var obj = (i == 0) ? '#{xaxis}' : '#{groupby' + i + '}';
          propertiesArr.push(obj);
      })
      idArr.forEach(function(d, i) {
          propertiesArr.push("#[" + d + "]");
      })
      console.log("propertiess", JSON.stringify(propertiesArr));
      var combineArr = [];
      propertiesArr.forEach(function(d, i) {
          var obj = nameArr[i] + d;
          combineArr.push(obj);
      })
      console.log("combineArrAS", JSON.stringify(combineArr));
      var globalArr = [];
      data.forEach(function(d, i) {
          var localObj = _.object(combineArr, d);
          globalArr.push(localObj);
      })
      return globalArr;
  }

  function getArr(obj, k,view) {   //used on view.typeinfo to get an array of property value of the propertyName 'name'
      var objects = [];
      for (var i in obj) {
          if (!obj.hasOwnProperty(i)) continue;
          if (typeof obj[i] == 'object') {
              objects = objects.concat(getArr(obj[i], k,view));
          } else if (i.contains(k) == true) {
              if (k == "name") {
                  objects.push(cutTableName(obj[i],view));
              } else
                  objects.push(obj[i]);
          }
      }
      return objects;
  }

  function cutTableName(stringText,view) {
		
      var uniTable = (view.data.jsonClass === "DataAdhocTable") ? view.data.fields[0].table + "." : null;
      var colm = (uniTable == null) ? stringText : stringText.split(uniTable)[1];
      return colm;
  }
   function Get_groupCountFn(t) { //to be used inside _.each
     var groupCount = 0;
     for (var propertyName in t[0]) {

         if (propertyName.contains("groupby") == true) groupCount = groupCount + 1;
     }
     return groupCount;
 }
  function Set_GroupFn(data, groupCount) { //to be uses inside _.each and _.flattened may be used
     groupCountArr = d3.range(0, groupCount);
     var groupProp = [];
     groupCountArr.forEach(function(d, i) {
         groupProp.push('groupby' + (d + 1));
     })
     console.log("groupProp", JSON.stringify(groupProp));
     var uniqCategory = _.uniq(_.pluck(data, 'category')); //store

     // var testgroupProp=['columnName','groupby1'];
     var nest = d3.nest();
     var output = [];
     groupProp.forEach(function(d, i) {
         nest = nest.key(function(k) {
                 return k[d];
             })
             .rollup(function(k) {
                 var columnD = _.first(_.pluck(k, 'columnName'));
                 var groupby1D = _.first(_.pluck(k, 'groupby1'));
                 var lastD = _.first(_.pluck(k, 'legendKey'));
                 var Num = parseInt(numDivFn(_.first(_.pluck(k, 'yAxis'))));
                 var modelD = _.first(_.pluck(k, 'model'));
                 var yAxisD = _.first(_.pluck(k, 'yAxis'));
                 var localCategory = _.pluck(k, 'category');

                 var catDiff = _.difference(uniqCategory, localCategory);
                 catDiff.forEach(function(a, b) {
                     k.push({
                         model: modelD,
                         yAxis: yAxisD,
                         columnName: columnD,
                         value: 0,
                         legendKey: lastD,
                         category: a
                     });
                 })
				 
                 var sorted_k = sortByArrayFn(k, uniqCategory);
				 var valueD=[];
				 var smp = _.groupBy(sorted_k, function(d){ 
				   return d["category"]; 
				   });
				   _.each(smp,function(l,unit){
				   var value=sum(_.pluck(l,'value'));
				   valueD.push(value);
				   });
                
                 var finalObj = {
                     type: modelD,
                     yAxis: yAxisD,
                     data: valueD,
                     name: lastD,
                     yAxis: Num - 1
                 };
                 output.push(finalObj);
                 return finalObj;
             });
     })
     outNest = nest.entries(data);
     return output;
 }
   function sortByArrayFn(data, array) { //used in Set_GroupFn
      var priority_order = array;
      data.sort(function(a, b) {
          return priority_order.indexOf(a.category) - priority_order.indexOf(b.category);
      });
      return data;
  }

  function sum(numbers) {
      return _.reduce(numbers, function(result, current) {
          return result + parseFloat(current);
      }, 0);
  }
//end Data phase
//X AXIS
	//-X axis arrangement 
	function sortByMonthFn(data,view){
	if (view.typeinfo.categoryIsMonth == "Yes") {
		  var priority_order = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		  data.sort(function(a, b) {
			  return priority_order.indexOf(a.category) - priority_order.indexOf(b.category);
		});}
	  return data;
	}
	//-end X axis arrangement 
//end X AXIS

// Y AXIS
	//-Y axis classification
	function axisDivFn(x) {
	var Axis=x.substring(0,1);
	return Axis; //return L or R
	}
	function numDivFn(x) { 
	var Num=x.substring(4,1); return Num; //return the number
	}

	


	//-end Y axis classification
//end Y AXIS 
//DRAW
	//optionalPie
	function Init_optionalpieFn(title){   
		var output={   pieSeries : {
		type: 'pie',
		name: title,
		data: [],
		center: [50, 80],
		size: 100,
		showInLegend: false,
		dataLabels: {
		  enabled: false
		}
		},pieObj:{},pie_colori:0,toPie_label:{}};
		return output; 
	}
	function Draw_optionalPieFn(after_pivotedData,view,text,left,top,pie_colori,Obj_pie_outloop){ 
		if (view.typeinfo.pie == "Yes") {
			var valueData = _.pluck(after_pivotedData, 'value');
			var totalValue_pie = _.reduce(valueData, function(memo, num) {
			return memo + num;
			}, 0);
			var name_pie = _.first(_.pluck(after_pivotedData, 'columnName'));
			Obj_pie_outloop.pieSeries.data.push({
			"name": name_pie,
			"y": totalValue_pie,
			"color": Highcharts.getOptions().colors[pie_colori]
			});
			Obj_pie_outloop.toPie_label = {
			items: [{
			html: text,
			style: {
			//  left: '50px',
			//                  top: '18px',
			left: left, top: top,  color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
			}
			}]
			}; Obj_pie_outloop.pie_colori=pie_colori+1;
		} else {
		Obj_pie_outloop.toPie_label = {};
		Obj_pie_outloop.pieSeries={};
		}
	}
	//-end optionalPie
//end DRAW  
