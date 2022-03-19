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

  sendTypedKeys(keys:string):void {
    this.searchSubject.next(this);
  }

  onKeys(): Observable<any> {
    return this.searchSubject.asObservable();
  }

  addTodo(todo:Todo):void {
    this.todoSubject.next(todo);
  }

  onAdd(): Observable<any> {
    return this.todoSubject.asObservable();
  }

}
