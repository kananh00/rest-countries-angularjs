// restCountries.service("alpha3CodeService", function () {
//   this.alpha3Code = "";
// });

restCountries.service("singleCountryService", [
    "$scope",
    "$http",
  function ($scope, $http) {
    var url = "https://restcountries.com/v2/alpha?codes=col";
    $http.get(url).then(function (response) {
      $scope.country = response.data;
      console.log($scope.country)
    });
    console.log("hi")
    
 }]);

//  restCountries.service("singleCountryService", ['$resource', function ($resource) {
//     this.GetSingleCountry = function (alpha3Code) {
//       var singleCountryAPI = $resource(
//         "https://restcountries.com/v2/alpha",
//         {
//           callback: "JSON_CALLBACK",
//         },
//         { get: { method: "JSONP" } }
//       );
//       return singleCountryAPI.get({
//         codes: alpha3Code
//       });
//     };
//   }]);