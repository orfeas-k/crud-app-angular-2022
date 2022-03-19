import { Component, OnInit, Input } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() text:String;
  showSearchField:boolean = false;

  constructor(private uiService:UiService) { 
  }

  ngOnInit(): void {
  }

  toggleSearchField(){
    this.showSearchField = !this.showSearchField
    //this.uiService.toggleSearch();
  }

}
