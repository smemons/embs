export class User {
    username:string;
    password:string;
    firstName:string;
    lastName:string;
    constructor(username:string,password:string,fname:string,lname:string){
        this.username=username;
        this.password=password;
        this.firstName=fname;
        this.lastName=lname;
    }
}
