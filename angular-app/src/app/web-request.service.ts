import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {


  readonly Root_URL;

  constructor(private http : HttpClient) {
    this.Root_URL='http://localhost:3000';
   }
  
  
  

  post(uri :string , payload : Object){
    //payload : object a ajouter 
    return this.http.post(this.Root_URL+'/'+uri, payload);

 };

}
