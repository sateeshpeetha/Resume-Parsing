	<dl style="text-align:left">
	<div ng-repeat="(id, Proj) in candidate.Projects" >
		
   <dt> <b> {{ Proj.project }} 
  </b></dt>
  <dt> {{Proj.client}} , {{Proj.Country }} </dt>
  <small>  {{Proj.fromMonth }} , {{ Proj.fromYear }} to {{ Proj.toMonth }} , {{ Proj.toYear}}</small>
  
   <dd style = "margin-top:5px;">
   {{Proj.Synopsis}}
   </dd>
  
  <dt style = "margin-top:5px;"> <u>Responsibilities </u> </dt>
  <div style = "margin-top:5px;" ng-repeat='(para, point) in Proj["Responsibilities"]' >
	<dd> 
	{{point}}
	</dd>
	</div>
  <br/>
  </div>
	<dl>
