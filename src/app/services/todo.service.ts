import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';
import { Todo } from '../models/Todo';


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
    return this.httpClient.put<Todo>(url, todo);
  }

}
