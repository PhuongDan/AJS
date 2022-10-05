import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {studentComponent} from "./student/student";
import {ClassroomComponent} from "./classroom/classroom.component";
import {teacherComponent} from "./Teacher/teacher";
import {LoginComponent} from "./login/login";
import {registerComponent} from "./register/register";



@NgModule({
  declarations: [
    AppComponent, studentComponent, ClassroomComponent, teacherComponent, LoginComponent, registerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
