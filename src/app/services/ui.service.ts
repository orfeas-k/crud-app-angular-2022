import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private todoSubject = new Subject<any>();
  private searchSubject = new Subject<any>();

  constructor() { }

  sendSearchResults(todos:any):void {
    console.log("sendSearchResults-UI");
    this.searchSubject.next(todos);
  }

  onSearch(): Observable<any> {
    console.log("onSearch-UI");
    return this.searchSubject.asObservable();
  }

  addTodo(todo:Todo):void {
    this.todoSubject.next(todo);
  }

  onAdd(): Observable<any> {
    return this.todoSubject.asObservable();
  }

}
