import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {





  constructor(private webRequestService : WebRequestService) { }
  
  createListe(data: object){ 
    return this.webRequestService.post ('api/stuff', data );
  };
  
  };
