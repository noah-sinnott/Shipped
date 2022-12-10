import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import {email, password, setEmail, setPassword } from '../global/global.module'
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  constructor(private ApiService: ApiService, private formBuilder: FormBuilder) { }
  items: any = {
    "data": []
  };
  
  sendItems: String = JSON.stringify(this.items)

  addForm = this.formBuilder.group({
    code: ["", Validators.required],
    carrier: ["", Validators.required]
  });

  ngOnInit(): void {
    if (email) {
      this.refresh();
    }
  }
   handleSubmit() {
     if (email) {
      this.ApiService.addTrack(this.addForm.value.carrier, this.addForm.value.code, password, email).subscribe((data) => this.alert(data));
    } else {
      window.alert("cannot dd items until logged in");
    }
  }
  

  alert(data: any) {
     if (data.status == 'not found') {
      window.alert('Error: please log in again');
    } else if (data.status == 'done') {
      window.alert('item tracking');
      this.refresh();
    } else {
      window.alert('already tracking');
    }
  }


   refresh() {
     this.ApiService.getInfo(password, email).subscribe((data) => this.items = data);
  }


  selectedItem: any = []

  addItem($event: any) {
    this.selectedItem = $event;
  }

}