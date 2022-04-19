import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input('data') user: any
  
  @Output() delete = new EventEmitter<number>();

  constructor() {
   
  }

  ngOnInit() {

  }

  onDelete(id: number){
    this.delete.emit(id);
    console.log(id);
  }

}
