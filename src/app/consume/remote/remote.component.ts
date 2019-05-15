import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  users:any = []

  constructor(private remote: RemoteService) { }

  ngOnInit() {
    this.remote.getRemoteUsers().subscribe((data)=>{
      console.log("received from rest api")
      console.log(data)
      this.users = data
      console.log("assigned to users")
      console.log(this.users)
    })
  }

}
