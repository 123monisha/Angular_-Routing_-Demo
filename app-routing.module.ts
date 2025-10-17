import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'employee',component:EmployeeHomeComponent,children:
    [{path:'add',component:AddEmployeeComponent},
      {path:'list',component:ListEmployeeComponent},
      {path:'edit/:id', component:EditEmployeeComponent}
    ]},
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
