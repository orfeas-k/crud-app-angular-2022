import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/Todo';
import { takeLast } from 'rxjs';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})

export class TodosListComponent implements OnInit {

  todos:Todo[] = [];

  todoInput:string = "";

  constructor(private todoService: TodoService) {}

  ngOnInit(): void { 
    this.todoService.getTodos().subscribe((todos) => (this.todos=todos));
  }

  deleteTodo(todo:Todo){
    this.todoService
      .deleteTodo(todo)
      .subscribe( () => (this.todos = this.todos.filter( t => t.id !== todo.id) ));
  }

  completeTodo(todo:Todo){
    todo.completed = !todo.completed;
    console.log(todo.completed);
  }

  toggleCompleted(id:number){
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  addTodo(){
    this.todos.push({
      title: this.todoInput,
      completed: false
    })
    this.todoInput = "";
  }
}
