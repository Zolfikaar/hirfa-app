import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;
  public isLoggedIn: boolean = false;
  private email: string;

  constructor(public afAuth: AngularFireAuth, public router: Router) { 
    
    let status = localStorage.getItem('isLoggedIn');
    console.log(status)
    
    if (status === 'true'){
      this.isLoggedIn = true; // unnessiry statement
    }else{
      this.isLoggedIn = false;
    }


    // firebase.auth().onAuthStateChanged(function (user) {
    //   if (user) {
    //     // User is signed in.
    //     this.isLoggedIn = true;// if the user logged in >> then redirect him to the home page in the next step.
    //     this.router.navigate(['/home'])//to redirect the app to 'home' page.
    //   } else {
    //     // No user is signed in.
    //     this.isLoggedIn = false;// if the user was not logged in >> then redirect him to the login page in the next step.
    //     this.router.navigate(['/login'])//to redirect the app to 'login' page.
    //   }

    // });
  }

  ngOnInit() {
  }

  logout(){
    this.afAuth.auth.signOut();
    this.isLoggedIn = false
    localStorage.setItem('isLoggedIn', 'false')
    this.router.navigate(['/login'])
  }
}
