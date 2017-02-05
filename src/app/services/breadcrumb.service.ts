import { BCMsg } from '../models/BCMsg';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class BreadcrumbService {
private subject = new Subject<any>();
constructor() { }
setBCMessage(areaName:string,roomName:string,incTitle:string)
{
    this.subject.next(new BCMsg(areaName, roomName,  incTitle));
}
getMessage(): Observable <any> {
        return this.subject.asObservable();
    }
}
