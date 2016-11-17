rabobank.factory("dataReader",function($http,$q){
	return{
		readCSV : function(){
			return $http.get('assignment/records.csv');
		},
		csvToJson : function(csvData){
		  var lines = csvData.split("\n");
		  var result = [];		  
		  var headers=lines[0].split(",");
		  var j=0;i=1;
		  while(j<headers.length){
				headers[j] = headers[j].toLowerCase().replace(/\W+(.)/g, function (x, chr) {
					return chr.toUpperCase();
				});
				if(headers[j] == 'reference'){
					headers[j] ='_reference';
				}
				j++;
		  }	
		  
		  while(i<lines.length){
			  var obj = {};
			  var currentline=lines[i].split(",");
			  if(lines[i] == '')
				break;
			  for(var j=0;j<headers.length;j++){				  
				obj[headers[j]] = currentline[j];
			  }			  
			  result.push(obj);
			  i++;
		  }
		  return result;
		},
		readXML : function(){
			return $http.get('assignment/records.xml');
		},
		xmlToJson : function(xmlData){
			var x2js = new X2JS();
			var aftCnv = x2js.xml_str2json(xmlData);
			return aftCnv.records.record;
		}
	}
});