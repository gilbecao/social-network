import PostApi from '../interfaces/post-api.interface';

export default class Post {
  public userId: number;
  public id: number;
  public title: string;
  public body: string;

  constructor(apiPost: PostApi) {
    this.userId = apiPost.userId;
    this.id = apiPost.id;
    this.title = apiPost.title;
    this.body = apiPost.body;
  }
}
