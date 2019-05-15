import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  friends:any = []
  buttonLabel = ""
  message = ""
  name =""
  years=0

  constructor(private remote: RemoteService) { }

  displayForm:boolean = false

  ngOnInit() {
    this.getAllFriends()
  }

  getAllFriends = function(){
    this.remote.getRemoteUsers().subscribe((data)=>{
      console.log("received from rest api")
      console.log(data)
      this.friends = data
      console.log("assigned to users")
      console.log(this.friends)
    })
  }

  displayAddFriendForm = function(){
    this.buttonLabel = "Add Friend"
    this.displayForm = true
  }

  saveFriend = function(frn){
    console.log(frn)

    this.remote.addFriend(frn).subscribe((data)=>{
      console.log("add friend success...")
      this.message = "Friend added..."
      this.getAllFriends()
      this.displayForm = false
    })

    //this.getAllFriends()

  }

  deleteFriend = function(cf){
   
    console.log("deleting friend... " + cf)
    this.remote.deleteFriend(cf).subscribe((data)=>{
      this.getAllFriends()
      this.message = "Friend deleted..."
    })
  }


  updateFriend = function(cf){
    this.displayForm = true
    this.buttonLabel = "Update Friend"
    this.remote.getFriendById(cf).subscribe((data)=>{
      console.log(data)
      this.name = data.name
      this.years = data.years
    })
  }

}
