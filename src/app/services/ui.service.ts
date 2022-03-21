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

  addTodo(todo:Todo):void {
    this.todoSubject.next(todo);
  }

  onAdd(): Observable<any> { //Subscriber function
    return this.todoSubject.asObservable();
  }

  passSearchResults(todos:any):void {
    this.searchSubject.next(todos);
  }

  onSearch(): Observable<any> { //Subscriber function
    return this.searchSubject.asObservable();
  }

}
