import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import {AllCommonModule} from './all-common/all-common.module';
import {LoginModule } from './login/login.module'

import { DefaultComponent } from './Component/default/default.component'
import {StaffComponent} from './managed-staff/./staff/staff.component';
import {ConfigComponent} from './managed-config/./config/config.component';
import {NotificationComponent} from './managed-notification/./notification/notification.component';
import {ProjectComponent} from './managed-project/./project/./project.component';
import {SalaryComponent} from './managed-salary/./salary/salary.component';
import {TimesheetComponent} from './managed-timesheet/./timesheet/timesheet.component';
import {appRoutes} from './app.routes';
import { HomeComponent } from './Component/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    StaffComponent,
    ConfigComponent,
    NotificationComponent,
    ProjectComponent,
    SalaryComponent,
    TimesheetComponent,
    HomeComponent,
  


  ],
  imports: [
    BrowserModule,
    AllCommonModule,
    RouterModule.forRoot(appRoutes),

    LoginModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
