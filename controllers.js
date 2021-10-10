restCountries.controller("homeController", [
    "$scope",
    "$http",
    "$location",
    function($scope, $http, $location) {
        var url = "https://restcountries.com/v2/all";
        $http.get(url).then(function(response) {
            $scope.countries = response.data;
            console.log($scope.countries)
        });
        $scope.goToCountry = function(alpha3Code) {
            console.log("hello")
            $location.path(`/country/${alpha3Code}`)
        }
    },
]);

restCountries.controller("singleCountryController", [
    "$scope",
    "$routeParams",
    "$http",
    function($scope, $routeParams, $http) {
        $scope.alpha3Code = $routeParams.alpha3Code;
        // $scope.countryResult = singleCountryService.GetSingleCountry($scope.alpha3Code);
        var url = `https://restcountries.com/v2/alpha/${$scope.alpha3Code}`;
        $http.get(url).then(function(response) {
            $scope.country = response.data;
            console.log($scope.country)
        });
        $scope.goBack = function() {
            window.history.back();
        };
        console.log($scope.alpha3Code)
        console.log("hello")
        console.log($scope.countryResult)
    }

])