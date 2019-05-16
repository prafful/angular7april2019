import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private http:HttpClient) { }

  getRemoteUsers(){
    return this.http.get("http://localhost:3000/friends")
  }

  addFriend(friend){
    return this.http.post("http://localhost:3000/friends", friend)
  }

  deleteFriend(id){
    return this.http.delete("http://localhost:3000/friends/"+ id)
  }

  getFriendById(id){
    return this.http.get("http://localhost:3000/friends/"+id)
  }

  postFriend(updatedFriend){
    return this.http.put("http://localhost:3000/friends/"+updatedFriend.id, updatedFriend)
  }


}
