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
  keys:String = ''
  results:any;

  constructor(private todoService: TodoService, private uiService:UiService) { 
  }

  ngOnInit(): void {
    this.todoService.searchTodos(this.keys).subscribe();
  }

  toggleSearchField(){
    this.showSearchField = !this.showSearchField
  }

  sendTypedKeys(event:any){
    this.keys = event.target.value;
    this.keys = this.keys.trim();
    this.todoService.
      searchTodos(this.keys).
        subscribe( (results) => 
          {this.results = results;
          let x = this.results.length;} );
    console.log(this.keys + ": sendTypedKeys-header before UI after todoService");
    console.log(this.results);
    this.uiService.sendSearchResults(this.results);
  }

}
