import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})

export class SuperComponent implements OnInit {

  friends = ["mohan", "sohan", "gopal", "manoj", "biju"]
  locations = [
    {
      city:"chennai",
      code:"044"
    },
    {
      city:"mumbai",
      code:"022"
    },
    {
      city:"bengaluru",
      code:"080"
    },
    {
      city:"delhi",
      code:"011"
    }
  ]

  display:boolean = true

  checkOne:boolean = true

  templateName = "mytemplate"

  name = "obb"

  playHideAndSeek = function(){
    console.log("First Function Call!!!!")
    this.display = this.display ? false:true;
  }

  displayAnyOne = function(){
    this.checkOne = this.checkOne ? false:true;
  }

  constructor() { }

  ngOnInit() {
  }

}
