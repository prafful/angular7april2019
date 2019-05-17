import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations:[
    trigger('doAnimateText',[
                    state('start', style({
                      color:'brown',
                      transform:'scale(1)',
                      letterSpacing:"5px"
                    })),
                    state('end', style({
                      color:'pink',
                      transform:'scale(2)'
                    })),
                    transition('start<->end', 
                                animate('2000ms ease-in') )                
    ])
  ]
})
export class AnimateComponent implements OnInit {

  currentState = 'start'

  doAnimation = function(){
    this.currentState = this.currentState === 'start'?'end':'start'
  }

  constructor() { }

  ngOnInit() {
  }

}
