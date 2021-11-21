import { Component } from '@angular/core';
import { PostService } from 'src/app/core/services/post/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  posts$ = this.postService.fetchPosts();

  constructor(private postService: PostService) {}
}
