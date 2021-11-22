import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import Post from '../../models/post';
import User from '../../models/user';
import { PostService } from '../../services/post/post.service';

@Injectable({
  providedIn: 'root',
})
export class PostStoreService {
  private posts$ = new BehaviorSubject<Post[]>([]);
  displayPosts$?: Observable<Post[]>;
  searchTerm$ = new Subject<string>();

  constructor(private postService: PostService) {
    this.displayPosts$ = this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.getPostsByAuthor(term))
    );
  }

  getPostsByAuthor(searchTerm: string) {
    return this.posts$.pipe(
      map((posts: Post[]) =>
        posts.filter((post: Post) => {
          return post.author.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        })
      )
    );
  }

  getPosts() {
    return this.postService.fetchPosts().pipe(
      tap((posts: Post[]) => {
        this.posts$.next(posts);
        this.searchTerm$.next('');
      })
    );
  }
}
