import { UIChart } from 'primeng/primeng';
import { first } from 'rxjs/operator/first';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

   data: any;
   dataReal :any;
   firstds:any;
   secondds:any;
   thirdds:any;

    constructor() {
       this.firstds=[65,59,80,81,56,55,40];
       this.secondds=[28, 48, 40, 19, 86, 27, 90];
       this.thirdds=[];
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Real Fires',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Drills',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                },

                {
                    label: 'Casualties',
                    backgroundColor: '#6d2d0a',
                    borderColor: '#6d265a',
                    data: [34, 45, 36, 19, 46, 23, 11]
                }
            ]
        };

        this.dataReal = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','Sept','Oct','Nov','Dec'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: this.firstds,
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: this.secondds,
                    fill: false,
                    borderColor: '#565656'
                },
                {
                    label: 'Third Dataset',
                    data: this.thirdds,
                    fill: false,
                    borderColor: 'red'
                }
            ]
        }
    }

  ngOnInit() {
  }

startReal(chart:UIChart){
debugger;
let _this=this;
setInterval(function(){
  debugger;
   _this.thirdds.push(Math.floor((Math.random()*100)+1));
      _this.firstds.push(Math.floor((Math.random()*100)+1));
         _this.secondds.push(Math.floor((Math.random()*100)+1));

 chart.refresh();
 }, 4000);


}

}
