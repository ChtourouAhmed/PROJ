import { Component, OnInit } from '@angular/core';
import {UsefullTipsData} from '../UsefulTipsData'

@Component({
  selector: 'app-prevention-tips',
  templateUrl: './prevention-tips.component.html',
  styleUrls: ['./prevention-tips.component.css']
})
export class PreventionTipsComponent {
  usefullTipsData = UsefullTipsData ;

  constructor() { 
    
  }

 
}
