import { Component, OnInit } from '@angular/core';
import { PostComponent } from 'src/app/components/post/post.component';
import * as mockPosts from '../../../mocks/posts.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public apiPosts: any;
  public posts: any;

  constructor() {}

  ngOnInit(): void {
    this.apiPosts = mockPosts;
    this.posts = this.apiPosts.default;
  }
}
