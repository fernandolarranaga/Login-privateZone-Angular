import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL = 'http://localhost:4000/api';
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<any>(this.URL + '/tasks');
  }

  getPrivateTasks() {
    return this.http.get<any>(this.URL + '/books');
  }

  saveTask(formAsk:any){
    return this.http.post<any>(`${this.URL}/books`, formAsk)

  }

  getTaskId(id:any){
    return this.http.get<any>(`http://localhost:4000/api/books/${id}`)
  }

  eliminate(id:any){
    return this.http.delete(`http://localhost:4000/api/books/${id}`)
  }

}
