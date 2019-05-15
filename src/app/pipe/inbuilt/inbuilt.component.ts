import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt',
  templateUrl: './inbuilt.component.html',
  styleUrls: ['./inbuilt.component.css']
})
export class InbuiltComponent implements OnInit {

  money = 88

  location = 'cheNNai'

  birthday = new Date()

  friends = ['ola', 'zoom', 'uber', 'ezy', 'auto']
  scores = [99, 88, 8, 5, 54, 4,44, 1]

  constructor() { }

  ngOnInit() {
  }

}
