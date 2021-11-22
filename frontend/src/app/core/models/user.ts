import UserApi from '../interfaces/user-api.interface';

export default class User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };

  constructor(userApi = {} as UserApi) {
    this.id = userApi.id;
    this.name = userApi.name;
    this.username = userApi.username;
    this.email = userApi.email;
    this.address = userApi.address;
    this.phone = userApi.phone;
    this.website = userApi.website;
    this.company = userApi.company;
  }
}
