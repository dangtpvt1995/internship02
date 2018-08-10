import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-to-role',
  templateUrl: './login-to-role.component.html',
  styleUrls: ['./login-to-role.component.scss']
})
export class LoginToRoleComponent implements OnInit {

	public isClick : boolean = false;
	public text : string = "Số lần đăng nhập thất bại: ";
	public number: number =0;
  constructor() { }

  ngOnInit() {
  }

  onCLick(){
  	this.isClick = true;
  	this.number += 1;
  	this.text = this.text;
  }

}
