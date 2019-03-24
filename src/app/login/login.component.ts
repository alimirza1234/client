import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: TokenPayload = {
    id: 0,
    name: '',
    username: '',
    email: '',
    password: ''
  }
  
  constructor(private auth: AuthenticationService, private router: Router) {
    
  }

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/profile')
      },
      err => {
        console.error(err)
      }
    )
  }
}
