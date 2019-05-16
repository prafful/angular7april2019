import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() sendName

  @Output() nameUpdated = new EventEmitter()

  updateName = function(){
    this.nameUpdated.emit(this.sendName)
  }
  
  constructor() { }

  ngOnInit() {
  }



}
