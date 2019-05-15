import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  simpleForm:any
  constructor() { }
  ngOnInit() {
    this.simpleForm = new FormGroup({
      fname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      lname: new FormControl("", this.customLengthValidator),
      hobby: new FormControl()
    })
  }
  customLengthValidator = function(control){
    console.log("Received control instance: ") 
    console.log(control)
   if(control.value.length< 6  ){
      return {'lname':true}
    }
  }


  saveData = function(something){
    console.log(something)
  }  

}
