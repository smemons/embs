import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
options: any;
  constructor() { }

  ngOnInit() {
     this.options = {
            center: {lat: 25.9371, lng: 49.67761},
            zoom: 12
        };
  }

}
