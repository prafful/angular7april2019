import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  friends:any = []
  buttonLabel = ""
  message = ""
  id=0
  name =""
  years=0

  constructor(private remote: RemoteService, private router:Router) { }

  displayForm:boolean = false
  displayUpdateForm:boolean = false

  ngOnInit() {
    this.getAllFriends()
  }

  getAllFriends = function(){
    //this.remote.getRemoteUsers().subscribe((response)=>{}, (error)=>{})
    //this.remote.getRemoteUsers().subscribe(function(response){}, function(error){})
    this.remote.getRemoteUsers().subscribe((data)=>{
      console.log("received from rest api")
      console.log(data)
      this.friends = data
      console.log("assigned to users")
      console.log(this.friends)
    },
    (error)=>{
      this.message = "Error..." + JSON.stringify(error)
      console.log("Error")
      console.log(error)
    })
  }

  displayAddFriendForm = function(){
    this.buttonLabel = "Add Friend"
    this.displayForm = true
  }

  saveFriend = function(frn){
    console.log(frn)
    console.log(frn.id)
    //Object.assign
    this.remote.addFriend(frn).subscribe((data)=>{
      console.log("add friend success...")
      this.message = "Friend added..."
      this.getAllFriends()
      this.displayForm = false
    },
    (error)=>{
      this.message = "Error..." + JSON.stringify(error)
      console.log("Error")
      console.log(error)
    })

    //this.getAllFriends()

  }

  deleteFriend = function(cf){
   
    console.log("deleting friend... " + cf)
    this.remote.deleteFriend(cf).subscribe((data)=>{
      this.getAllFriends()
      this.message = "Friend deleted..."
    },
    (error)=>{
      this.message = "Error..." + JSON.stringify(error)
      console.log("Error")
      console.log(error)
    })
  }


  updateFriend = function(cf){
    this.displayUpdateForm = true
    this.buttonLabel = "Update Friend"
    this.remote.getFriendById(cf).subscribe((data)=>{
      console.log(data)
      this.id=data.id
      this.name = data.name
      this.years = data.years
      //this.id = data.id
    },
    (error)=>{
      this.message = "Error..." + JSON.stringify(error)
      console.log("Error")
      console.log(error)
    })
  }

  updateFriendNow = function(updatedFriend){

    this.remote.postFriend(updatedFriend).subscribe((data)=>{
      this.displayUpdateForm = false
      this.getAllFriends()
      this.message = "Friend updated..."
    },
    (error)=>{
      this.message = "Error..." + JSON.stringify(error)
      console.log("Error")
      console.log(error)
    })
  }

  updateFriendInSPA = function(id){
    this.router.navigate(["/updatefriend", id])
    //it will look for the fiollowing path
    //       /updatefriend/1
  }

}
