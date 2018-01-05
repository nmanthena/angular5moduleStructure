import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
  user: any;
  constructor() { }

  setUser(user) {
    this.user = user;
  }
  getUser() {
    return this.user;
  }

}
