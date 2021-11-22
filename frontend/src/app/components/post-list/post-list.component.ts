import { Component, OnInit } from '@angular/core';
import { PostStoreService } from 'src/app/core/stores/post/post-store.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts$ = this.postStore.displayPosts$;

  constructor(private postStore: PostStoreService) {}

  ngOnInit(): void {
    this.postStore.getPosts().subscribe();
  }
}
