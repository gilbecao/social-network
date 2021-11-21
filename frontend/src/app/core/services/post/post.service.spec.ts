import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import Post from '../../models/post';

import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  const postMock = {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'put',
      'delete',
    ]);
    service = new PostService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call httpClient.get', () => {
    const expectedPosts = [new Post(postMock)];

    httpClientSpy.get.and.returnValue(of(expectedPosts));

    service.fetchPosts().subscribe((posts) => {
      expect(posts).toEqual(expectedPosts);
      expect(httpClientSpy.get).toHaveBeenCalled();
    });
  });

  it('should call httpClient.post', () => {
    const expectedPost = new Post(postMock);
    httpClientSpy.post.and.returnValue(of(expectedPost));

    service.createPost({} as Post).subscribe((post) => {
      expect(post).toEqual(expectedPost);
      expect(httpClientSpy.post).toHaveBeenCalled();
    });
  });

  it('should call httpClient.put', () => {
    const expectedPost = new Post(postMock);
    httpClientSpy.put.and.returnValue(of(expectedPost));

    service.updatePost({} as Post).subscribe((post) => {
      expect(post).toEqual(expectedPost);
      expect(httpClientSpy.put).toHaveBeenCalled();
    });
  });

  it('should call httpClient.delete', () => {
    service.deletePost('1');
    expect(httpClientSpy.delete).toHaveBeenCalled();
  });
});
