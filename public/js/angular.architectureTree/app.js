angular.module('ChartsApp', [])
    .run(function(data) {
        data.fetchJsonData().then(function (response) {
            console.log('data loaded');
        }, console.error);
    });

var API_Base = 'http://localhost/test/test.php';