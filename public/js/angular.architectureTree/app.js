angular.module('ChartsApp', ['angularInlineEdit'])
    .run(function(data) {
        data.fetchJsonData().then(function (response) {
            console.log('data loaded');
        }, console.error);
    });

var API_Base = 'http://0.0.0.0:3000/';