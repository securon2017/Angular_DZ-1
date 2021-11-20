import { Component, Input } from '@angular/core';
import { PersonInfoInterface } from '../personal-info.component';

export interface PassportInterface{
    series: string;
    number: number;
}

@Component({
    selector: 'passport-info',
    templateUrl: './passport-info.component.html',
    styleUrls: ['./passport-info.component.css']
  })
  export class PassportInfoComponent{
     @Input() passport:PassportInterface = {
         series: '',
         number: 0
     }
  }