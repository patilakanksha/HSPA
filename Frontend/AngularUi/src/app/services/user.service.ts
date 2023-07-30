import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

constructor() { }

users: any[] = [];
  
  addUser(user: any){
    // debugger
    if(localStorage.getItem('Users')){
      let tempUsers = localStorage.getItem('Users');
      if(tempUsers)
        this.users.push(JSON.parse(tempUsers));  
    }
    else{
      this.users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(this.users))
  }

}
