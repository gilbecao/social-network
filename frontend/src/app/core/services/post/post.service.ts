import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Post from '../../models/post';
import PostApi from '../../interfaces/post-api.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  fetchPosts() {
    return this.http
      .get<Post[]>(`${environment.apiUrl}/posts`)
      .pipe(map((posts: PostApi[]) => posts.map((post) => new Post(post))));
  }

  createPost(post: Post) {
    return this.http
      .post<Post>(`${environment.apiUrl}/posts`, post)
      .pipe(map((post: PostApi) => new Post(post)));
  }

  updatePost(post: Post) {
    return this.http
      .put<Post>(`${environment.apiUrl}/posts/${post.id}`, post)
      .pipe(map((post: PostApi) => new Post(post)));
  }

  deletePost(postId: string) {
    return this.http.delete(`${environment.apiUrl}/posts/${postId}`);
  }
}
