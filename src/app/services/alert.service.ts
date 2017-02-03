import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
private subject = new Subject<any>();
  constructor() { }
success(message: string) {
        
         this.subject.next({ severity:'success', summary:' Success', detail: message});

    }
 
    error(message: string) {
    
        this.subject.next({ severity:'error', summary:'Error Message', detail: message});
    }
 
    getMessage(): Observable <any> {
        return this.subject.asObservable();
    }
}
