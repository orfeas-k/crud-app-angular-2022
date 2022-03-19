import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { UiService } from 'src/app/services/ui.service'; 
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() onSubmitTodo: EventEmitter<Todo> = new EventEmitter()
  userId:number = 1;
  title:string;
  completed:boolean = false;

  constructor(private todoService: TodoService, private uiService:UiService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.title){
      alert('Actually you forgot what do not wish to forget!')
      return;
    }

    const newTodo = {
      userId: this.userId,
      title: this.title,
      completed: this.completed
    }

    this.onSubmitTodo.emit(newTodo);
    this.todoService.addTodo(newTodo).subscribe();
    this.uiService.addTodo(newTodo);

    this.title = '';
    this.completed = false;
  }
}
