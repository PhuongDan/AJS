import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {studentComponent} from "./student/student";
import {ClassroomComponent} from "./classroom/classroom.component";
import {teacherComponent} from "./Teacher/teacher";
import {LoginComponent} from "./login/login";
import {registerComponent} from "./register/register";
import {RouterModule, Routes} from "@angular/router";
import {thoitiethanoiComponent} from "./thoitiethanoi/thoitiethanoi";
import {HttpClientModule} from "@angular/common/http";
const appRoutes: Routes = [
  { path:'',component:LoginComponent},
  {path:'register',component:registerComponent},
  {path:'thoitiethanoi',component:thoitiethanoiComponent},
];
@NgModule({
  declarations: [
    AppComponent, studentComponent, ClassroomComponent, teacherComponent, LoginComponent, registerComponent,thoitiethanoiComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
