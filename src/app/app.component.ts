import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Profile } from './profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name : String;
  age : number;
  found : boolean;
  profiles: Profile[];

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

  addProfile(): void {
    var profile: Profile = {id: 3, name: "Thusitha", age: "26"};
    if (!profile) { return; }
    this.appService.addProfile(profile  as Profile)
      .subscribe(profile => {
        //this.profiles.push(profile);
      });
  }

}
