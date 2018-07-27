import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor() { }
  Register = {};
  ngOnInit() {
  }

  register() {
    console.log('obj', this.Register);
  }

}
