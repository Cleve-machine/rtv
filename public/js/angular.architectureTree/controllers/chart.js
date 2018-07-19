angular.module('ChartsApp').controller('chartCtrl', function ($scope, $http, bus) {
    'use strict';

    // Get Tree Name from DB
	var api_url = API_Base + 'api/get_treename';
    $http.get( api_url ).success(function(data) {
        if( data != "null" )
            $scope.treeName = data;
        else
        	$scope.treeName = "Architecture Tree";
    });

    bus.on('updateData', function(data) {
        $scope.data = angular.copy(data);
    });

	$scope.$watch('treeName', function() {
    	var requestData = { 'tree_name' : $scope.treeName };
    	var api_url = API_Base + 'api/save_treename';
    	var request = $http({
            method: "post",
            url: api_url,
            data: requestData
        });

        request.success(
            function( res ) {
                console.log( res );
            }
        );
	});
    $scope.$watch('data', function() {
    	var data = $scope.data;
    	console.log( data );
    	if ( typeof data !== "undefined" )
    	{
    		if( typeof data.name !== "undefined" ){
				var token = $('#authenticity_token').val();
		    	// $scope.data.authenticity_token = token;
		    	var formData = $scope.data;
		    	formData.authenticity_token = token;
				var jsonData = JSON.stringify( formData )
				var requestData = { data : jsonData };
				var header = { headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}
				var api_url = API_Base + 'api/save_tree';
				
				var request = $http({
		            method: "post",
		            url: api_url,
		            data: requestData
		        });
		        // Store the data-dump of the FORM scope.
		        request.success(
		            function( res ) {
		                console.log( res );
		            }
		        );
		    }
	    }
	});
});
