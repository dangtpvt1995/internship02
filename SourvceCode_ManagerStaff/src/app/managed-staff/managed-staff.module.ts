import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff/staff.component';
import { DislayAccountService } from './staff-services/display-account.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ StaffComponent]
})
export class ManagedStaffModule { }
