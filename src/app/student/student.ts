import {Component, Input} from "@angular/core";
@Component({
  selector: 'student',
  templateUrl: './student.html'
})
export class studentComponent {
  @Input()
  classN?:string;

}
