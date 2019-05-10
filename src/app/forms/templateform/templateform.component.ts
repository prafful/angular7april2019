import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  fname = "OBB"

  constructor() { }

  ngOnInit() {
  }
  submitForm = function(something){
    console.log(something)
  }

}
