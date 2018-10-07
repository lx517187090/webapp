'user strict'

angular.module('app')
    .controller('mainCtrl',['$scope', function ($scope) {
        $scope.list = [{
            id: "1",
            name: "销售",
            imgSrc:"image/company-3.png",
            companyName: "tencent",
            city: "深圳",
            industry: "互联网",
            time: "2018-10-7"
        },
            {
                id: "1",
                name: "销售",
                imgSrc:"image/company-3.png",
                companyName: "tencent",
                city: "深圳",
                industry: "互联网",
                time: "2018-10-7"
            }]

    }])