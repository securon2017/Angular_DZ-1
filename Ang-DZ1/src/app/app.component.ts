import { Component } from '@angular/core';
import { PersonInfoInterface } from './personal-info/personal-info.component';
import {PassportInterface} from './personal-info/passport-info/passport-info.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang-DZ1';
  
  user : PersonInfoInterface = {
    firstName: 'Vasya',
    lastName: 'Pupkin',
    middleName: 'Ivanovich',
    birth: new Date(1980,10,15),
    profession: 'Driver',
    passport: {
      series:'FD',
      number: 4598726
    }
  }
}
