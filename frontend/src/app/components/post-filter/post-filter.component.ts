import { Component } from '@angular/core';

import Post from 'src/app/core/models/post';
import { PostStoreService } from 'src/app/core/stores/post/post-store.service';
import User from '../../core/models/user';

@Component({
  selector: 'app-post-filter',
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.scss'],
})
export class PostFilterComponent {
  constructor(private postStore: PostStoreService) {}

  search(searchValue: string) {
    this.postStore.searchTerm$.next(searchValue);
  }
}
