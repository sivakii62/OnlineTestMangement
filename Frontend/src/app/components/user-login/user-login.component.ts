import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  validate:number;
  submitted: boolean= false;
  constructor(private formBuilder:FormBuilder,private router:Router,private userService:UserService) { 

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password: ['', Validators.required]
    });
    if(sessionStorage.username!=null)
    {
      sessionStorage.removeItem("username");
      this.router.navigate(['/login']);
    }
  }
  // login() function
  login(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }

    let username = this.loginForm.controls.username.value;
    let password = this.loginForm.controls.password.value;
this.userService.valid(username,password).subscribe(data=>{
  this.function2(data);
},
err=>{
  console.log(err.error);
  alert("Invalid login Credentials");
})   
  }
  // end of Login() function
  function2(data)
  {
    this.validate=data;
    
      let username = this.loginForm.controls.username.value;
      if(this.validate==1){
        sessionStorage.username = username;
        this.router.navigate(['userDashboard']);
      }
      if(this.validate==2)
      {
        sessionStorage.username = username;
        this.router.navigate(['admin']);
      }
      if(this.validate==0){
        alert("Invalid login credentials")
      }
    }
  forgot()
  {
    this.router.navigate(['/forgot']);
  }
  home()
  {
    this.router.navigate(['/home']);
  }
      
  

}