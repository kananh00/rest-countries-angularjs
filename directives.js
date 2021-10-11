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

restCountries.directive("searchAndFilter", function(){
  return{
    restrict: "E",
    templateUrl: "directives/searchAndFilter/searchAndFilter.html",
    replace: true,
    require: 'ngModel',
    scope: {
      searchedCountry: '=ngModel',
      submit: '&ngSubmit'
    }
  }
})