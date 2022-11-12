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

  handleClick(item: any) {
    this.newItemEvent.emit(item)
  }



}