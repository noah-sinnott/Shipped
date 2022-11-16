import { Component, AfterViewInit, Input, SimpleChanges} from '@angular/core';
const L = require('leaflet');

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
  
export class ShowItemComponent implements AfterViewInit {

constructor() { }
 @Input()
 item: any = [];
  

  
  
  private map: any;
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

  }
  
marker = L.icon({
    iconUrl: '../../assets/locationIcon.svg',
    iconSize:     [16, 16], // size of the icon
    iconAnchor:   [8, 8], // point of the icon which will correspond to marker's location
});

  ngAfterViewInit(): void {
    this.initMap();
  }



  async getCords(adress: String) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${adress}&key`//add api key
    const res = await fetch(url).then(res => res.json())
    return res.results[0].geometry.location
  }

  async addToMap(changes: any) {
    let latlngs = []
    const items = changes.item.currentValue[0]
    for (let event of items) {
    let adress = event.Details
    const regex = /([" ", ,]+)/g
    adress = adress.replace(regex, "+")
    if (adress) {
    const data = await this.getCords(adress)
     latlngs.push([data.lat, data.lng]) 
        var marker: any = L.marker([data.lat, data.lng], { icon: this.marker, lable: "heyy" },).addTo(this.map);
      }
    }
    var polyline = L.polyline(latlngs, { color: '#2196f3' }).addTo(this.map);
    this.map.fitBounds(polyline.getBounds())
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.map.remove();
    this.initMap()
    console.log(changes)
    this.addToMap(changes)
    }


}

