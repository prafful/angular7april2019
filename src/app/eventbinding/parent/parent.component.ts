import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name = "React"

  getNameUpdate = function(e){
    console.log(e)
    this.name = e
  }

  constructor() { }

  ngOnInit() {
  }

}
