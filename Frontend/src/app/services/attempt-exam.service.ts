import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttemptExamService {
  

  baseUrl = "http://localhost:8082/Start/";

  constructor(private http : HttpClient) { }

  getAllTests(){
    return this.http.get(this.baseUrl+"getAllTest" )
  }

  getTestsAssignedToUser(userName){
   return this.http.get(this.baseUrl+"getAllTestByUserId?userName="+userName)
  }

  getActiveTests(userName,testId){
    return this.http.get(this.baseUrl+"getTestByUserId?userName="+userName+"&testId="+testId)
  }

  getAllQuestion(userName, testId) {
    return this.http.get(this.baseUrl+"getAllQuestion?userName="+userName+"&testId="+testId);
   }

  setTestAnswer(getAnswer : any) {
    return this.http.post(this.baseUrl+"setTestAnswer",getAnswer,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }


}
