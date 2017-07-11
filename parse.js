
var app = angular.module('Rparse', []);


function headerCtl($scope, $element, $attrs) {
  //add code later
   
}


function SummaryCtl($scope, $element, $attrs) {
  //add code later
   
}


function educationCtl($scope, $element, $attrs) {
  //add code later
   
}


function skillsCtl($scope, $element, $attrs) {
  //add code later
   
}


function expCtl($scope, $element, $attrs) {
  //add code later
   
}


   
app.component('header', {

  templateUrl: './templates/Candidate.tpl',
  controller: headerCtl

});

app.component('summary', {

  templateUrl: './templates/Summary.tpl',
  controller: SummaryCtl

});

app.component('education', {

  templateUrl: './templates/Education.tpl',
  controller: educationCtl

});

app.component('skills', {

  templateUrl: './templates/Skills.tpl',
  controller: skillsCtl

});

app.component('exp', {

  templateUrl: './templates/Exp.tpl',
  controller: expCtl

});
