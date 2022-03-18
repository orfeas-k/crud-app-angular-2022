import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() onSubmitTodo: EventEmitter<Todo> = new EventEmitter()
  title:string;
  completed:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.title){
      alert('Actually you forgot what do not wish to forget!')
      return;
    }

    const newTodo = {
      title: this.title,
      completed: this.completed
    }

    this.onSubmitTodo.emit(newTodo);

    this.title = '';
    this.completed = false;
  }
  
}
