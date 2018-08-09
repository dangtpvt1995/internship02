import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff/staff.component';
import {Users} from './model/users.class'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ StaffComponent]
})
export class ManagedStaffModule { }
