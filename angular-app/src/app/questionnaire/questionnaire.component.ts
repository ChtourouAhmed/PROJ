import { BrowserModule }    from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { questions } from '../questionsData';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import { TaskService } from './../task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  questions=questions;
  questio;
  toutelesquestion=[];
  reponse = new Object();



  constructor(private route : ActivatedRoute,private taskService : TaskService, private router : Router) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
      this.questio = questions[params.get('questionId')];
      
    });
  }
  onSubmit(form: NgForm) {
    for (const property in form.value) {
      this.reponse[`${property}`] = `${form.value[property]}`;
    
    }
  
    
}



final(){
  
 
    try {
      this.taskService.createListe(this.reponse).subscribe((res)=>{console.log(res)})
      
    } catch (error) {
      console.error(error);
    }
    
}
}
