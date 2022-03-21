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
  title:string;

  constructor(private todoService: TodoService, private uiService:UiService) { }

  ngOnInit(): void {
  }

  onSubmit(){ //Submits new To Do to server and passes it to the UI
    if(!this.title){
      alert('Actually you forgot what it was that you do not wish to forget!')
      return;
    }

    var newTodo:Todo = {
      userId: 1,
      id:null,
      title: this.title,
      completed: false
    }

    //Submits the new To Do to server
    this.todoService.addTodo(newTodo).subscribe( 
      (newTodoId) => {newTodo.id = newTodoId.id; //Waiting on To Do id by server before passing it to the UI 
                      this.uiService.addTodo(newTodo);});
    
    //Emptying input value 
    this.title = '';
  }
}
