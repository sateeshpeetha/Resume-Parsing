	<dl style="text-align:left">
	<div ng-repeat="(id, Exp) in candidate.Experience" >
		
   <dt> <b> {{ Exp.title }} , {{ Exp.company }} ,  {{ Exp.country }}
  </b></dt>
  <small>  {{Exp.fromMonth }} , {{ Exp.fromYear }} to {{ Exp.toMonth }} , {{ Exp.toYear}}</small>
  
  <dt style = "margin-top:5px;"> <u>Roles & Responsibilities </u> </dt>
  <div style = "margin-top:5px;" ng-repeat='(para, point) in Exp["Roles & Responsibilities"]' >
	<dd> 
	{{point}}
	</dd>
	</div>
  <br/>
  </div>
	<dl>
