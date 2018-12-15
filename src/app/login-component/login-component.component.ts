import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  formData;
  indexNumber;
  constructor(private router: Router) { }
  ngOnInit() {
      this.formData = new FormGroup({
          indexNumber: new FormControl('', Validators.compose([
              Validators.required,
              Validators.maxLength(15),
          ])),
          password: new FormControl('', Validators.compose([
              Validators.required,
              Validators.minLength(6)])
          )
      });

}
  onClickSubmit(inputData) {
    console.log(inputData.indexNumber);
    if (inputData.indexNumber === 'admin' && inputData.password === '123456') {
      // alert('login successfully');
      this.router.navigate(['home']);
        document.getElementById('login-container').style.display = '';
        document.getElementById('home-container').style.display = '';
    } else {
        alert('Invalid Login');
        return false;
    }

  constructor() { }

  ngOnInit() {
  }

}
