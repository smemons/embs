import { AlertService } from './../services/alert.service';
import { Userservice } from '../services/userservice.service';
import { log } from 'util';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
//import { AlertService, UserService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})
 
export class RegisterComponent {
    model: any = {};
    loading = false;
 
    constructor(
        private router: Router,
       private userService: Userservice,
       private alertService: AlertService
     ) { }
 
    register() {
      console.log(this.model);
        this.loading = true;
         this.userService.create(this.model)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                   // this.alertService.success('Registration successful', true);
                   console.log('User created - Service!');
                   this.alertService.success('User created!');
                    this.router.navigate(['/home']);
                },
                error => {
                    //this.alertService.error(error);
                    console.log(error);
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}