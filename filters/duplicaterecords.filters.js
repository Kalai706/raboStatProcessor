rabobank.filter("duplicaterecords",function(){
	return function(records){
		var i=0;
		var temp={};  
		var duplicate_record=[];  
		while(i < records.length){
			if(temp[records[i]._reference] >= 0){
				if(duplicate_record.indexOf(records[i]._reference) ==-1)
					duplicate_record.push(records[i]._reference);
				records.splice(i, 1);
				i--;
			}
			temp[records[i]._reference] = i;
			i++;
		}	
		return duplicate_record;
	};
});