import { Component, OnInit, Input } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() text:String;
  showSearchField:boolean = false;
  subscription:Subscription;

  constructor(private uiService:UiService) { 
    this.subscription = this.uiService.onToggle().subscribe( (value) => (this.showSearchField = value) );
  }

  ngOnInit(): void {
  }

  toggleSearchField(){
    this.uiService.toggleSearch();
  }

}
