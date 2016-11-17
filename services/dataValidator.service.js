rabobank.service("dataValidator",function($filter){
  this.validateRecord = function(record){
	var duplicate_record=[];  
	var record_clone = angular.copy(record);
	duplicate_record = $filter('duplicaterecords')(record_clone);
	
	angular.forEach(record, function(value, key){
		if(duplicate_record.indexOf(value._reference) !=-1)
			value.reference_status = false;
		else{			
			value.reference_status = true;
		}
		
		if(chkEndBalance(value.startBalance,value.mutation,value.endBalance))
			value.endbalance_status = true;
		else
			value.endbalance_status = false;
		angular.extend(record,value);
	});
	return record;
  };
  
  function chkEndBalance(startBalance,mutation,endBalance){
	  if(typeof(mutation) =='undefined')
			return false;
	  switch(mutation.charAt(0)){
		  case '+':
			var cal = parseFloat(startBalance)+parseFloat(mutation.substr(1,mutation.length));
			 if(parseFloat(cal).toFixed(2) == parseFloat(endBalance).toFixed(2))
				  return true;
			 else
				  return false;
			break;
		  case '-':
			var cal = parseFloat(startBalance)-parseFloat(mutation.substr(1,mutation.length));
			 if((parseFloat(cal).toFixed(2) == parseFloat(endBalance).toFixed(2)))
				  return true;
			 else
				  return false;
			break;	
	  }	 
  }  
}); 