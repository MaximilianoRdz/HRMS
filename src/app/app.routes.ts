import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeesComponent } from './employees/employees.component';
import { PermitsComponent } from './permits/permits.component';
import { ReportsComponent } from './reports/reports.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'employees', component: EmployeesComponent},
      {path: 'permits', component: PermitsComponent},
      {path: 'reports', component: ReportsComponent}
    ]
  },
];
