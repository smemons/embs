import { PostService } from './../../services/postService';
import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls: ['./listposts.component.css']
})
export class ListpostsComponent implements OnInit {
  posts:Post[];
  constructor(private postService:PostService) { }

  ngOnInit() {
 this.getAllPosts().subscribe({

      next: posts => {

        console.log("Got rooms: ", posts);
        this.posts=posts;
      }
    });
  }

getAllPosts() {

    return this.postService.getAll();
  }
}
