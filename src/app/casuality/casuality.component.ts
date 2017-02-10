import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casuality',
  templateUrl: './casuality.component.html',
  styleUrls: ['./casuality.component.css']
})
export class CasualityComponent {

  data: any;

    constructor() {

        this.data = {
            labels: ['Injured','Dead','Healthy'],
            datasets: [
                {
                    data: [Math.ceil(Math.random() * 10), Math.ceil(Math.random() * 10), Math.ceil(Math.random() * 10)],
                    backgroundColor: [
                        "#FF6384",
                        "red",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "red",
                        "#FFCE56"
                    ]
                }]
            };
    }

}
