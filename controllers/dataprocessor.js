rabobank.controller('dataprocessorController',function($scope,$http,dataReader,dataValidator,$exceptionHandler){
	$scope.processValidation = function(){
		if($scope.fileformat == 'CSV'){
			 dataReader.readCSV().
				then(function(result){
					$scope.records = dataValidator.validateRecord(dataReader.csvToJson(result.data));
				});
		}else if($scope.fileformat == 'XML'){
			dataReader.readXML().
				then(function(result){
					$scope.records = dataValidator.validateRecord(dataReader.xmlToJson(result.data));
				});
		}else{
			$exceptionHandler("Invalid File format");
			return;
		}
	}
});