import { RouterModule, Routes } from '@angular/router';
import{AppComponent} from './app.component';
import {StaffComponent} from './managed-staff/./staff/staff.component';
import {ConfigComponent} from './managed-config/./config/config.component';
import {NotificationComponent} from './managed-notification/./notification/notification.component';
import {ProjectComponent} from './managed-project/./project/./project.component';
import {SalaryComponent} from './managed-salary/./salary/salary.component';
import {TimesheetComponent} from './managed-timesheet/./timesheet/timesheet.component';
import {DefaultComponent} from './Component/default/default.component'
import { HomeComponent} from './Component/home/home.component'

import {LoginToRoleComponent} from './login/login-to-role/login-to-role.component';

export const appRoutes: Routes = [
	{
		path: "",
		redirectTo: '/index',
		pathMatch: 'full'
	}
	,	
	{
		path: "index",
		component: HomeComponent
	},
	{
		path: "staff",
		component: StaffComponent

	},
	{
		path: "config",
		component: ConfigComponent
	},
	{
		path: "notification",
		component: NotificationComponent
	},
    {
		path: "project",
		component: ProjectComponent
	},
	{
		path: "salary",
		component: SalaryComponent
	},
	{
		path: "timesheet",
		component:TimesheetComponent
	},
	{
		path: "login",
		component:LoginToRoleComponent
	},
	{
		path: "**",
		component: DefaultComponent
	}
	
]