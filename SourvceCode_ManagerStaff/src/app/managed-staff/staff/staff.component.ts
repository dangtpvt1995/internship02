import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
	public show:boolean=false;
	public message:string;
public users: any[]=[
{
	id:1,
	name: "lai",
	pass:"123",
	phone:'00000000'
}
];
  constructor() { }

  ngOnInit() {
  }
add(name, pass, phone){
	if(name!="" && pass!="" && phone!=""){
		this.show=true;
		let id = this.users.length+1;
this.users.push({id:id, name:name,pass:pass,phone:phone})
	}
else{
	this.show = false
	this.message = "khong thanh cong"
}
}
}
