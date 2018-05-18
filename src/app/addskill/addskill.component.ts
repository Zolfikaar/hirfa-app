import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import {Router} from '@angular/router';


@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {

  [x: string]: any;
  // to handle the data for controlling purpose
data = {
  name : '',
  email : '',
  phone : '',
  province : '',
  skill : '',
  price : '',
  note : ''
}
uid: any;
email:string = '';
itemList: AngularFireList<any>

  constructor(private fire: AngularFireAuth,public db: AngularFireDatabase, public router: Router ) {
    this.itemList = db.list('skills')

    let user = localStorage.getItem('email')
//    let user = this.fire.auth.currentUser.email
    this.email = user
    console.log(user)
    console.log('_______________')

    this.uid = localStorage.getItem('uid')
    console.log('uid: ' + this.uid)
    // this.fire.authState.subscribe(auth => { // this statement cheack "authState", (missing part about "subscribe" function)google it later,using an auth object as a parameter
    //   if(auth){ // if "auth" return's true, then.
    //     this.uid = auth.uid // put the uid value from DB in this varable.
    //     console.log('uid: '+ this.uid)
    //   }
    // })
   }

  ngOnInit() {
    
  }

  insertSkill(){
    //to push the information from the form database and put their values in the properties of the "data" object.
    this.itemList.push({
      name : this.data.name ,
      email : this.data.email ,
      phone : this.data.phone ,
      province : this.data.province ,
      skill : this.data.skill ,
      price : this.data.price ,
      note : this.data.note ,
    })

    this.router.navigate(['/myskill'])//to redirect the app to 'myskill' page.
  }

}
