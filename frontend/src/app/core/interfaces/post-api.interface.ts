import UserApi from './user-api.interface';

export default interface PostApi {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: UserApi;
}
