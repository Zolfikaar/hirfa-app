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
  public isLoggedIn: boolean;
  private email: string;

  constructor(public afAuth: AngularFireAuth, public router: Router) { 
        
    let status = localStorage.getItem('isLoggedIn');
    console.log(status)
    
    if (status === 'true'){
      this.isLoggedIn = true;
      console.log(status)
    }else{
      this.isLoggedIn = false;
      console.log(status)
    }

  }

  ngOnInit() {}

  logout(){
    this.afAuth.auth.signOut();
    this.isLoggedIn = false
    localStorage.setItem('isLoggedIn', 'false')
    this.router.navigate(['/login'])
  }
}