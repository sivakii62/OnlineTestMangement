import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-caluculate-score',
  templateUrl: './caluculate-score.component.html',
  styleUrls: ['./caluculate-score.component.css']
})
export class CaluculateScoreComponent implements OnInit {

  user_Test:any[] = [];

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
this.getAllUserTest()
  
  }
getAllUserTest(){
  this.service.getAllUserTest().subscribe(data=>{
    this.handle(data);
console.log(data);
  }
  ,err=>{
    console.log(err.error.details);
    alert(err.error.details);
    this.router.navigate(['/admin/home'])
  })
}



  handle(data){
    this.user_Test=data


  }
  declare(uti:number)
  {
this.service.CalculateResult(uti).subscribe(data=>{

  console.log(data);
alert("result declared")
this.getAllUserTest();
}
  ,err=>{
    console.log(err.error.details);
  })
  
}
}
