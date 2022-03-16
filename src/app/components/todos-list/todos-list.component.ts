import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  title = 'Todos List #title';

  todos:Todo [];

  todoInput:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        title: "first todo",
        completed: false
      },
      {
        title: "second todo",
        completed: true 
      }
    ]
  }

  toggleCompleted(id:number){
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter( (v,i) => i !== id);
  }

  addTodo(){
    this.todos.push({
      title: this.todoInput,
      completed: false
    })
    this.todoInput = "";
  }
}
