<div ng-show="loading">
<h1> Please wait while loading candidate profile </h1>
</div>

<div ng-show="ready">
<ol style="text-align:left;">
<div ng-repeat="(para, point) in candidate.Summary" >
		
    <li>  {{point}} </li> 
  	
	</div>
</ol>

<h4> Areas of Expertise </h4>


<ol style="text-align:left;">
<div ng-repeat="(para, point) in candidate.KeyAreas" >
		
    <li>  {{point}} </li> 
  	
	</div>
</ol>
<div>
