restCountries.directive("countryCard", function(){
    return{
      restrict: "E",
      templateUrl: "directives/countryCard/countryCard.html",
      replace: true,
      scope: {
        countryInfo: "="
      }
    }
})