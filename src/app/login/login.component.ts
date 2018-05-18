import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLoggedIn: boolean;
  email: string = '';
  password: string = '';

  constructor(private fire: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  myLogin(){
    this.fire.auth.signInWithEmailAndPassword(this.email, this.password)
    .then(user =>{
      
      console.log(this.email, this.password)
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('email', this.fire.auth.currentUser.email)
      
      this.isLoggedIn = true;
      
      function refresh(): void {
        window.location.reload();// to reload the page after logging in
        
      }
      refresh();
      
    }).catch(error =>{
     console.log(error)
      });this.router.navigate(['/home'])
  }
  

}
