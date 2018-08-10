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
	public list : Account[] = [];

	public isClick : boolean = false;
	public text : string = 'Add success';

	//demo

  constructor(private disPlayS : DislayAccountService) {
  	this.list = this.disPlayS.getAllaccount();
  	 }

  ngOnInit() {
  	console.log(this.list);
  }
  addAccount(username:string, password:string, phone:number){
  	let account = new Account(username,password,phone);
  	this.disPlayS.addAccount(account);
  	this.isClick = true;
  }


}
