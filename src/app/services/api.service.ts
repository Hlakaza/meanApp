import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
  messages: any =  [];
  baseUrl = 'http://localhost:3000';
  constructor( private http: Http) { }
  /**
   * Getting messages from the api
   */
  getMessages() {
    const url = `${this.baseUrl}/posts`;
    return this.http.get(url);
  }
 /**
  * Registering a new user
  * @param userData user data
  */
  registerUser(userData) {
     const url = `${this.baseUrl}/register`;
     return this.http.post(url, userData);
  }
}
