import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  todaysDate = new Date();
  userName:string = ""
  constructor(private router : Router) { 
    setInterval(() => {
      this.todaysDate = new Date();
    }, 1000);
  }

  ngOnInit() {
    let u=sessionStorage.username
  }
  logOut()
  {
   
    if(sessionStorage.username != null){
     
      sessionStorage.removeItem("u");
    this.router.navigate(['login']);
  }
}
}
