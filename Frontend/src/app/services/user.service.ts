import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Test, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "http://localhost:8082";

  constructor(private http:HttpClient) { }
  valid(id:String,password:string)
  {
   
    return this.http.get(this.baseUrl+"/acc/pa"+"/"+id+"/"+password);    
  }


  getAllUserTest()
  {
    return this.http.get(this.baseUrl+"/Admin/getAllUserTests")
  }

  Register(users:User )
  {
return this.http.post(this.baseUrl+"/signup",users);
  }
  getUserid(id:string)
  {
    return this.http.get(this.baseUrl+"/getUserId"+id);
  }
  getAllTestAssignedToAUser(userId:string)
  {
    return this.http.get<Test[]>(this.baseUrl+"/getAllTestByUserId"+"/"+userId);
  }
  getAllTest(){
    return this.http.get<any[]>(this.baseUrl + "/getAllTest");
 }
 forget(users:User)
 {
   return this.http.put(this.baseUrl+"/forgot",users);
 }
 getResultForUser(userId:string)
 {

   return this.http.get<any[]>(this.baseUrl+"/getResult"+"/"+userId);
 }
 getRegisterInTest (userId:string, testId:any){
  return this.http.get<any>(this.baseUrl + "/getResultModule/assignTest?testId=" + testId + "&userId=" + userId);
}
getCategoryResultForTest(userTestId : number){
  return this.http.get<any>(this.baseUrl+"/getCategoryResult/"+userTestId);
}
CalculateResult(uti:number)
{
  return this.http.get(this.baseUrl+"/Admin/getScore/"+uti);
  
  
}
getQuestions(testId : number){
  return this.http.get<any>(this.baseUrl+"/getQuestions/"+testId);
}






private loader = new BehaviorSubject<boolean>(true);
private state = this.loader.asObservable();

show() {
  this.loader.next(<boolean>true);
}
hide() {
  this.loader.next(<boolean>false);
}

getState() {
  return this.state;
}
}