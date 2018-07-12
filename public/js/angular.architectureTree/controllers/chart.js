angular.module('ChartsApp').controller('chartCtrl', function ($scope, $http, bus) {
    'use strict';

    bus.on('updateData', function(data) {
        $scope.data = angular.copy(data);
    });

    $scope.$watch('data', function() {
		var jsonData = JSON.stringify( $scope.data )
		var requestData = { data : jsonData };
		var header = { headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}
		var token = $('#authenticity_token').val();
		// var api_url = API_Base + '/api/save_tree?authenticity_token=' + token;
		var api_url = API_Base + 'api/save_tree?data=' + encodeURIComponent(jsonData);
	
		$http.get( api_url, requestData, header )
            .success(function( data, status, headers, config){
                console.log( data );
            })
	});

});
