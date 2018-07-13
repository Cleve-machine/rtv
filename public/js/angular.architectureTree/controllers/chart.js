angular.module('ChartsApp').controller('chartCtrl', function ($scope, $http, bus) {
    'use strict';

    bus.on('updateData', function(data) {
        $scope.data = angular.copy(data);
    });

    $scope.$watch('data', function() {
		var token = $('#authenticity_token').val();
    	$scope.data.authenticity_token = token;

		var jsonData = JSON.stringify( $scope.data )
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
	});

});
