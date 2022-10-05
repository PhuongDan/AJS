import {Component} from "@angular/core";
@Component({
  selector: 'classroom',
  templateUrl: './classroom.component.html'
})
export class ClassroomComponent {
  className = 'T2207A - SEM1';
  siso = 27;
  schoolName = 'FPT Academy Interbational'

  themSinhVien() {
    this.siso++;
  }

  giamSinhVien() {
    if(this.siso>0){
      this.siso--;
    }
  }
    sobangai = 1;

    thembangai() {
      this.sobangai++;
    }
    giambangai() {
      if (this.sobangai>0){
        this.sobangai--;
      }
    }
  }

