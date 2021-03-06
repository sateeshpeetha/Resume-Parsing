
var app = angular.module('Rparse', []);

function loadData($scope, $element, $attrs,$http) {
 
 $scope.loading = true;
 $scope.ready  = false;
 
 $http.get("candidate.json").then(function(response) {
   $scope.candidate = response.data
  $scope.ready  = true;
  $scope.loading = false;
  
 },function(error) {
  // failed to load
   //redirect to another page.
  // commenting error redirect for testing purpose
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

  templateUrl: 'templates/Education.tpl',
  controller: loadData

});

app.component('skills', {

  templateUrl: 'templates/Skills.tpl',
  controller: loadData

});

app.component('exp', {

  templateUrl: 'templates/Exp.tpl',
  controller: loadData

});

app.component('projects', {

  templateUrl: 'templates/Projects.tpl',
  controller: loadData

});
