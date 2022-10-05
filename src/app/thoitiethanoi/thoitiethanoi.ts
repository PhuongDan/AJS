import {Component, Input} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'thoitiethanoi',
  templateUrl: '/thoitiethanoi.html'
})
export class thoitiethanoiComponent {
  city: string = 'Hanoi'
  temp: number = 0;
  hump: number = 0;
  press: number = 0;

  constructor(private http: HttpClient) {
  }
  ngOnInit(){
    this.hanoi();
  }
  hanoi(){
    // lay thong tin nhiet do thoi tiet hanoi
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        console.log(data);
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city =data.name +","+ data.sys.country;
      })
  }
}
