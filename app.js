(function () {
    "use strict";

    angular.module('httpTesting', [])
        .controller('MainCtrl', MainCtrl);

    function MainCtrl($http) {
        var vm = this;

        vm.questions = [];

        $http.get('data/test_data.json')
            .success(function (data) {
                vm.questions = data.questions;
            });


    }


}());