import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router'

export var selectedItem: any = {}

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  @Input()
  items: any = [];

  @Output() newItemEvent  = new EventEmitter<any>();



  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

  handleClick(items: any , code: any) {
    const clensed: any[] = []
    for (let i = 0; i < items.length; i++){
      if (items[i].Details.length > 1) {     
            clensed.push(items[i]);
      }
    }
    this.newItemEvent.emit([clensed, code])
  }

  getDate(date: any) {
    if (date) {
      const obj : any= { '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec' };
    let month : any = date.slice(5, 7);
    let day = date.slice(8, 10);
      month = obj[month];
      if (day == '02') {
       day = `${day}nd`;
      } else if (day == '03') {
        day = `${day}rd`;
      } else if (day == '01') {
        day = `${day}st`;
      } else {
        day = `${day}th`;
      }
    return month + ' ' + day
    }
    return 
  }


}