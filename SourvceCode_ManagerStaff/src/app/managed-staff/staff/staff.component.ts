import { Component, OnInit } from '@angular/core';

//model
import {Account} from './../../model/account.class';

//services
import {DislayAccountService} from './../staff-services/display-account.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
<<<<<<< HEAD
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
=======
	public list : Account[] = [];

	public isClick : boolean = false;
	public text : string = 'Add success';

	//demo

  constructor(private disPlayS : DislayAccountService) {
  	this.list = this.disPlayS.getAllaccount();
  	 }
>>>>>>> 4b7170b570d45567b49184e81c2fda07ab270f72

  ngOnInit() {
  	console.log(this.list);
  }
  addAccount(username:string, password:string, phone:number){
  	let account = new Account(username,password,phone);
  	this.disPlayS.addAccount(account);
  	this.isClick = true;
  }
<<<<<<< HEAD
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
=======


>>>>>>> 4b7170b570d45567b49184e81c2fda07ab270f72
}
