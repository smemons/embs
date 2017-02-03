import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 //name: string = 'Hello '; 
  constructor() { }

 images: any[];
    
    ngOnInit() {
        this.images = [];
        this.images.push({source:'../../assets/demo/img1.jpg', alt:'Description for Image 1', title:'Title 1'});
       this.images.push({source:'../../assets/demo/img2.jpg', alt:'Description for Image 2', title:'Title 1'});
      //  this.images.push({source:'showcase/resources/demo/images/galleria/galleria3.jpg', alt:'Description for Image 3', title:'Title 3'});
       
    }

}
