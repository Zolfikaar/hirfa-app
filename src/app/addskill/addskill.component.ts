import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
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


itemList: AngularFireList<any>

  constructor(public db: AngularFireDatabase, public router: Router ) {

  this.itemList = db.list('skills')
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
