import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerData = {};
  constructor( private apiService: ApiService) { }
  ngOnInit() {
  }

  /**
   * Post registration data to register the user.
   * Get aa result (res) or an error (err) on success or failer
   */
  register() {
    this.apiService.registerUser(this.registerData)
    .subscribe(res => {
      console.log('Success', res);
    }, err => {
      console.log(err);
    });
  }

}
