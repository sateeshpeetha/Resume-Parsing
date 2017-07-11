
var app = angular.module('Rparse', []);

function loadData($scope, $element, $attrs,$http) {
 $http.get("candidate.json").then(function(response) {
   $scope.candidate = response.data
 },function(error) {
  // failed to load
   //redirect to another page.
   window.location.href="error.html";
 });
   
};
   
app.component('header', {

  templateUrl: 'templates/Candidate.tpl',
  controller: loadData

});

app.component('summary', {

  templateUrl: 'templates/Summary.tpl',
  controller: loadData

});

app.component('education', {

  templateUrl: './templates/Education.tpl',
  controller: loadData

});

app.component('skills', {

  templateUrl: './templates/Skills.tpl',
  controller: loadData

});

app.component('exp', {

  templateUrl: './templates/Exp.tpl',
  controller: loadData

});
