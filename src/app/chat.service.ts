import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const url =  'http://dummy.restapiexample.com/api/v1/create';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  constructor(
    private http:HttpClient
  ) { }

  sendMessageService(message) {
    const obj = {
      message: message,
      name: Math.random().toString(36).substring(7),
      salary: '75',
      age: 28
    }
    return this.http.post(url, obj);
  }
}
