import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showSearchField:boolean = false;
  private subject = new Subject<any>();

  constructor() { }
/*
  toggleSearch():void {
    this.showSearchField = !this.showSearchField;
    this.subject.next(this.showSearchField);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }*/

  addTodo(todo:Todo):void {
    this.subject.next(todo);
  }

  onAdd(): Observable<any> {
    return this.subject.asObservable();
  }

}
