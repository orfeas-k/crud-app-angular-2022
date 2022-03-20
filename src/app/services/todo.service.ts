import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private apiUrl = 'https://arr-todo.herokuapp.com/todos'

  constructor(private httpClient:HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }

  deleteTodo(todo:Todo): Observable<Todo>{
    const url = `${this.apiUrl}/${todo.id}`
    return this.httpClient.delete<Todo>(url);
  }

  updateTodo(todo:Todo): Observable<Todo>{
    const url = `${this.apiUrl}/${todo.id}`
    return this.httpClient.put<Todo>(url, todo, httpOptions);
  }

  addTodo(todo:Todo): Observable<Todo>{
    return this.httpClient.post<Todo>(this.apiUrl, todo, httpOptions);
  }

  searchTodos(keys:String): Observable<any>{
    const url = `${this.apiUrl}/?q=${keys}`
    return this.httpClient.get<Todo[]>(url);
  }

}