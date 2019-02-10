import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name : String;
  age : number;
  found : boolean;

  constructor(private appService: AppService){}

  onNameKeyUp(event:any){
    this.name = event.target.value;
    this.found = false;
  }

  getProfile(){
    this.appService.getProfile(this.name)
    .subscribe(
      (data:any[]) => {
        if(data.length > 0){
          this.age = data[0].age;
          this.found = true;
        }
      }
    )
  }

}
