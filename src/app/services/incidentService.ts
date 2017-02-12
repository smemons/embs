import { AuthService } from './auth.service';
import { Incident } from './../models/incident';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class IncidentService {

constructor(private http:Http,private authService: AuthService) { }

create(incident:Incident)
{
  incident.createdBy=this.authService.getCurrentUser();
   console.log('posting incident from service: ' + incident);
    //return this.http.post('/api/user', JSON.stringify(user), this.options);
    return this
      .http
      .post('/api/incident', incident)
      .map((response: Response) => response.json());
}
//get all Incident
 getAll() {
    return this
      .http
      .get('/api/incident/all')
      .map((response: Response) => response.json());
  }

   //get incident by incName
  getIncidentByName(incName: string) {


    return this.http

      .get('/api/incident/byName/'+incName)
      .map((res: Response) => res.json());

  }

}
