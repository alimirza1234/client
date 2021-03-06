import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { AuthenticationService } from './authentication.service'
import { AuthGuardService } from './auth-guard.service'
import { MyNavComponent } from './my-nav/my-nav.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,MatButtonModule,MatButtonToggleModule,MatCardModule,
  MatCheckboxModule,MatChipsModule,MatDatepickerModule,MatDialogModule,MatDividerModule,MatExpansionModule,
  MatGridListModule,  MatIconModule,  MatInputModule,  MatListModule,  MatMenuModule,  MatNativeDateModule,  MatPaginatorModule,  MatProgressBarModule,  MatProgressSpinnerModule,
  MatRadioModule,MatRippleModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule,MatSnackBarModule, MatSortModule,MatStepperModule,  MatTooltipModule,MatToolbarModule
} from '@angular/material';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'client', component: ClientComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MyNavComponent,
    ClientComponent
  ],
  imports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule
    ,MatCardModule,
    MatCheckboxModule,MatChipsModule,MatDatepickerModule,
    MatDialogModule,MatDividerModule,MatExpansionModule,
    MatGridListModule,  MatIconModule,  MatInputModule,
     MatListModule,  MatMenuModule,  MatNativeDateModule,
     MatPaginatorModule,  MatProgressBarModule, 
    MatProgressSpinnerModule,
    MatRadioModule,MatRippleModule, MatSidenavModule,
     MatSliderModule, MatSlideToggleModule,MatSnackBarModule,
      MatSortModule,MatStepperModule,  MatTooltipModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService ,AuthGuardService],
  bootstrap: [AppComponent]
  
})
export class AppModule {}
