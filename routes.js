restCountries.config(function ($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "pages/home/home.html",
    controller: "homeController",
  })
  .when("/country", {
    templateUrl: "pages/singleCountry/singleCountry.html",
    controller: "singleCountryController",
  })
  .when("/country/:alpha3Code", {
    templateUrl: "pages/singleCountry/singleCountry.html",
    controller: "singleCountryController",
  });
});
