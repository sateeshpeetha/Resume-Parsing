<table>
<td>
<img src="{{candidate.img}}"/>
</td>
<td>
</td>
<td>
<h3 class="name"> {{candidate.Name}} </h3>
<h5 class="title"> {{candidate.Title}} </h5>
	<div ng-repeat="(type, contact) in candidate.Contact" >
	 <small> 	
      {{type}} : {{contact}}  
  	</small>
	</div>
</td>
</table>
