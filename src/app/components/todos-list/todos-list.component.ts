import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})

export class TodosListComponent implements OnInit {
  todos:Todo[] = [];
  refresh:boolean = false;
  subscription:Subscription;

  constructor(private todoService: TodoService, private uiService:UiService) {
  //  this.subscription = this.uiService.onToggle().subscribe( (value) => (this.refresh = value) )
    this.subscription = this.uiService.onAdd().subscribe( (todo) => (this.todos.push(todo)) )
  }

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
    this.todoService.updateTodo(todo).subscribe();
  }



}
