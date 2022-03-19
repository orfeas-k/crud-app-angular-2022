import { Component, OnInit, Input, Output, EventEmitter, Renderer2,ElementRef,ViewChild  } from '@angular/core';
import { Todo } from 'src/app/models/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Todo; 
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter()
  @Output() onCompleteTodo: EventEmitter<Todo> = new EventEmitter()
  @Output() onUpdateTodo: EventEmitter<Todo> = new EventEmitter()
  @ViewChild('titleInput') titleInput:ElementRef; 

  constructor(private renderer:Renderer2) {
    this.renderer.listen('window', 'click',(e:Event)=>{ 
      if( e.target!==this.titleInput.nativeElement){
          this.doneEditing();
      }
    });
  }
  editFlag:boolean = false;

  ngOnInit(): void {}

  onDelete(todo:Todo) {
    this.onDeleteTodo.emit(todo);
  }

  onComplete(todo:Todo){
    this.onCompleteTodo.emit(todo)
  }

  editTitle(){
    this.editFlag = true;
  }

  doneEditing(){
    this.editFlag = false;
    this.onUpdateTodo.emit(this.todo);
  }

}
