import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text:String;
  @Input() color:String;
  @Input() imgSrc:String;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  emitClick(){
    this.btnClick.emit();
  }

}
