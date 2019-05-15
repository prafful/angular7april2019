import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks = []
  todo =""
  addTodo = function(something){
    console.log(something)
    this.tasks.push(something.value.todo)
    console.log(this.tasks)
    this.todo =""
  }
  taskCompleted = function(current){
    console.log(current)
    this.tasks.splice(current, 1)
  }
  constructor() { }
  ngOnInit() {
  }

}
