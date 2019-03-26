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

  constructor(http: HttpClient) {
   http.get(this.url)
   .subscribe(response=>{
     console.log(response);
     this.client=response;
   });

   }

  ngOnInit() {
  }

}
