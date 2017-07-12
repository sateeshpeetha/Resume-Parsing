	<ul style="text-align:left">
	
	<div ng-repeat="( title,details) in candidate.Education" >
	<li> <b> {{title}} , Completed in {{details.to}}, {{details.grade}}   </b> </li>
	<li> {{details.university}} , {{details.Place}} </li>
	
	<br>
	</div>
		</ul>
	<u><b> Trainings and Certification </b></u>
	<ul style="text-align:left">
	<div ng-repeat='item in candidate["Trainings & Certifications"]' >
	<li style="margin-top:5px"> {{item }} </li>

	</div>
	</ul>
