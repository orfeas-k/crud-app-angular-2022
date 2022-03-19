import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showSearchField:boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleSearch():void {
    console.log(123);
    this.showSearchField = !this.showSearchField;
    this.subject.next(this.showSearchField);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
