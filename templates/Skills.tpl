
	<div class="skillSearchInput">
	<input  type="text" ng-model="skillsearch" size="30" placeholder="Search Skills" ></div>
  <br>
	<span  ng-repeat="skill in candidate.Skills  | filter : skillsearch " >
		
        <span class="skills"> {{skill}}  </span>
  	
	</span>
	
