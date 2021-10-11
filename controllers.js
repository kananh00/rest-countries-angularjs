restCountries.controller("homeController", [
  "$scope",
  "$http",
  "$location",
  "countryService",
  function ($scope, $http, $location, countryService) {
    $scope.searchedCountry = countryService.cityName;
    $scope.$watch("searchCountry", function () {
      countryService.countryName = $scope.searchCountry;
      console.log($scope.searchCountry);
    });
    console.log(countryService.countryName);
    if (countryService.countryName === "") {
      var url = "https://restcountries.com/v2/all";
      $http.get(url).then(function (response) {
        $scope.countries = response.data;
        console.log(countryService.countryName);
      });
    }

    $scope.submitSearchedCountry = function () {
        if(countryService.countryName !== ""){
             var url = `https://restcountries.com/v2/name/${countryService.countryName}`;
      $http.get(url).then(function (response) {
        $scope.countries = response.data;
        console.log(countryService.countryName);
      }); 
        }
        else{
            var url = "https://restcountries.com/v2/all";
            $http.get(url).then(function (response) {
              $scope.countries = response.data;
              console.log(countryService.countryName);
            });
        }
    };
    $scope.goToCountry = function (alpha3Code) {
      console.log("hello");
      $location.path(`/country/${alpha3Code}`);
    };
  },
]);

restCountries.controller("singleCountryController", [
  "$scope",
  "$routeParams",
  "$http",
  function ($scope, $routeParams, $http) {
    $scope.alpha3Code = $routeParams.alpha3Code;
    // $scope.countryResult = singleCountryService.GetSingleCountry($scope.alpha3Code);
    var url = `https://restcountries.com/v2/alpha/${$scope.alpha3Code}`;
    $http.get(url).then(function (response) {
      $scope.country = response.data;
      console.log($scope.country);
    });
    $scope.goBack = function () {
      window.history.back();
    };
    console.log($scope.alpha3Code);
    console.log("hello");
    console.log($scope.countryResult);
  },
]);
