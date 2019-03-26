import { Component, OnInit } from '@angular/core';

import { AuthenticationService, TokenPayload } from "../authentication.service";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
client: any;
private url="http://localhost:3000/clients"
  todo: any;
  

  constructor(private http: HttpClient) {
   this.http.get(this.url)
   .subscribe(response=>{
     console.log(response);
     this.client=response;
   });

   }

  ngOnInit() {
  }

  createData(todo){
    let data ={
      name : todo.value
    };
    this.http.post("http://localhost:3000/clients/register",data)
    .subscribe(response=>{
      console.log(response);

      this.client.push(response);
    })

  

    // let data = {
    //   title: client.value
    // };
    // this.http.post(this.url,data)
    // .subscribe(response=>{
    //   console.log(response)
    // })
  }

}
