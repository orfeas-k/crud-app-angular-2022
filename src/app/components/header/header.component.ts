import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSearchField:boolean = false;

  constructor(private todoService: TodoService, private uiService:UiService) { }

  ngOnInit(): void { }

  toggleSearchField(){
    this.showSearchField = !this.showSearchField
  }

  getSearchResults(event:any){
  //Gets results from server via TodoService and passes them to subscriber(todos-list) via UIService 
    let input = event.target.value.trim();
    this.todoService.searchTodos(input).subscribe( 
      (results) => {this.uiService.passSearchResults(results);} ); 
  }

}
