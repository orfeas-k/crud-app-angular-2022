import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ElementRef, ViewChild  } from '@angular/core';
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
  editFlag:Boolean = false;

  constructor(private renderer:Renderer2) {
  // Creates a listener to event when user clicks outside the @ViewChild of #titleInput field
    this.renderer.listen('window', 'click',(e:Event)=>{ 
      if( e.target!==this.titleInput.nativeElement){
          this.doneEditing();
      }
    });
  }

  ngOnInit(): void { }

  onDelete(todo:Todo) {
    this.onDeleteTodo.emit(todo);
  }

  onComplete(todo:Todo){
    this.onCompleteTodo.emit(todo);
  }

  /* Functions called upon events in order to imitate the intuitive edit function of windows */
  editTitle(){//Double clicking enables editing
    this.editFlag = true; 
  }

  doneEditing(){ // Clicking outside of input field stops editing
    this.editFlag = false;
    this.onUpdateTodo.emit(this.todo);
  }

}
