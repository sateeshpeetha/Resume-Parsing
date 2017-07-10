
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

  templateUrl: 'Candidate.tpl',
  controller: headerCtl

});

app.component('summary', {

  templateUrl: 'Summary.tpl',
  controller: SummaryCtl

});

app.component('education', {

  templateUrl: 'Education.tpl',
  controller: educationCtl

});

app.component('skills', {

  templateUrl: 'Skills.tpl',
  controller: skillsCtl

});

app.component('exp', {

  templateUrl: 'Exp.tpl',
  controller: expCtl

});
