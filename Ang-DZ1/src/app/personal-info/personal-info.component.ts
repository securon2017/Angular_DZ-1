import { Component, Input } from '@angular/core';
import { PassportInterface } from './passport-info/passport-info.component';

export interface PersonInfoInterface{
    firstName: string;
    lastName: string;
    middleName: string;
    birth: Date;
    profession: string;
    passport: PassportInterface;
}

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent{
    @Input() user: PersonInfoInterface = {
        firstName: '',
        lastName: '',
        middleName: '',
        birth: new Date(2000,1,1),
        profession: '',
        passport: {
            series:'',
            number: 0
        }
    };
}