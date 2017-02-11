import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
options: any;
overlays :any[];

  constructor() { }

  ngOnInit() {
     this.options = {
            center: {lat: 25.9371, lng: 49.67761},
            zoom: 12
        };
        this.overlays = [

                new google.maps.Circle({center: {lat: 25.9371, lng: 49.67761}, fillColor: '#f442b6', fillOpacity: 0.35, strokeWeight: 1, radius: 1500})

            ];
  }

}
