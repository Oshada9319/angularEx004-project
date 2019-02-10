import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name : String;
  age : number;
  found : boolean;

  constructor(private httpClient: HttpClient){}

  onNameKeyUp(event:any){
    this.name = event.target.value;
    this.found = false;
  }

  getProfile(){
    this.httpClient.get('http://my-json-server.typicode.com/Oshada9319/JSON-Server-Faker/profiles/?name=${this.name}')
    .subscribe(
      (data:any[]) => {
        if(data.length){
          this.age = data[0].age;
          this.found = true;
        }
      }
    )
  }

}
