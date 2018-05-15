import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.component.html',
  styleUrls: ['./myskill.component.css']
})
export class MyskillComponent implements OnInit {

  itemList: AngularFireList<any>

  itemArray = []

  data = {
    name: '',
    email: '',
    phone: '',
    province: '',
    skill: '',
    price: '',
    note: '',
  }

  constructor(public db: AngularFireDatabase, public router: Router){

    this.itemList = db.list('skills')

    this.itemList.snapshotChanges()
    .subscribe(actions=>{
      actions.forEach(action=>{
        let y = action.payload.toJSON()
        y["$key"] = action.key
        this.itemArray.push(y as listItemClass)
      })
    })
    // console.log(this.itemArray)
   }
  ngOnInit() {
  }

  editForm($key) {
    for (let value of this.itemArray)
      if (value['$key'] == $key) {
        console.log(value['$key'])
        this.data.name = value['name'];
        this.data.email = value['email'];
        this.data.phone = value['phone'];
        this.data.province = value['province'];
        this.data.skill = value['skill'];
        this.data.price = value['price'];
        this.data.note = value['note']
      }
  }

  onEdit($key) { // the order of the parameters must be exact same order in the function call
    this.data.name
    this.data.email 
    this.data.phone 
    this.data.province
    this.data.skill 
    this.data.price 
    this.data.note

    this.itemList.set($key , {
      name: this.data.name,
      email: this.data.email,
      phone: this.data.phone,
      province: this.data.province,
      skill: this.data.skill,
      price: this.data.price,
      note: this.data.note,
    })
    this.itemArray = []
    }
    //console.log('name: ' + this.data.name + ' phone: ' + this.data.phone + ' email: ' + this.data.email + ' province: ' + this.data.province + ' skill: ' + this.data.skill + ' price: ' + this.data.price)
  onDelete($key) {
    this.itemList.remove($key);
    this.itemArray = []
  }

  
  }

export class listItemClass{
  $key: string;
  name: string;
  email: string;
  phone: string;
  province: string;
  skill: string;
  price: string;
  note: string;
}