import { Injectable } from '@angular/core';

import { Account } from './../../model/account.class';
@Injectable({
  providedIn: 'root'
})
export class DislayAccountService {
	public listAccount : Account[] = [
		new Account("u1","thach dep trai",972136821),
		new Account("u2","nguyen ngoc thach",972136821),
			];


  constructor() { }

  getAllaccount(){
  	return this.listAccount;
  }

  addAccount(account : Account){
  	return this.listAccount.push(account);
  }
}
