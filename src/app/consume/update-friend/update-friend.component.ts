import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-friend',
  templateUrl: './update-friend.component.html',
  styleUrls: ['./update-friend.component.css']
})
export class UpdateFriendComponent implements OnInit {

  receivedId:any
  updateFriend:any

  constructor(private remote:RemoteService, private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activeRoute)
    console.log("Display friend with id: ")
    console.log(this.activeRoute.snapshot.paramMap.get("myid"))
    this.receivedId = this.activeRoute.snapshot.params.myid
    console.log(this.receivedId)
    this.remote.getFriendById(this.receivedId).subscribe((response)=>{
      this.updateFriend = JSON.stringify(response)
    }, (error)=>{
      this.updateFriend = JSON.stringify(error)
    })
  }

}
