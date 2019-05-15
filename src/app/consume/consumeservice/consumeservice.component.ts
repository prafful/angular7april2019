import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-consumeservice',
  templateUrl: './consumeservice.component.html',
  styleUrls: ['./consumeservice.component.css']
})
export class ConsumeserviceComponent implements OnInit {

  constructor(private local:LocalService) { }

  ngOnInit() {
    console.log(this.local.myPI)
    this.local.welcome()
    this.local.score.push(45)
    console.log(this.local.score)
  }

}
