import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-consumeservice2',
  templateUrl: './consumeservice2.component.html',
  styleUrls: ['./consumeservice2.component.css']
})
export class Consumeservice2Component implements OnInit {

  constructor(private local:LocalService) { }

  ngOnInit() {
    console.log(this.local.score)
    this.local.score.push(88)
  }

}
