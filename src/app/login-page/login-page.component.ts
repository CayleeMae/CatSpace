import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { fakeCats } from 'src/assets/mockData/mock-cat-data';
import { Cat } from 'src/assets/models/catInfo';
import { EmailErrorStateMatcher } from '../validators/email-error-state-matcher/email-error-state-matcher';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{


  public loginForm = new FormGroup({});
  public emailFormControl = new FormControl('');
  // public passwordValidator = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]);

  public matcher = new EmailErrorStateMatcher();

  cat!: Cat;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.loginForm.addControl(
      'email',
      new FormControl('null', [Validators.required, Validators.email])
    );

    const id = this.route.snapshot.paramMap.get('id');
    this.cat = fakeCats.find(cat => cat.id === id)!;
  }

  public ngOnChanges() {
    console.log('fghjkl',this.loginForm.value);
  }

  // getEmailErrorMessage() {
  //   if (this.emailValidator.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.emailValidator.hasError('email') ? 'Not a valid email' : '';
  // }

  // validateEmail(email) {

  // }

  // getPasswordErrorMessage() {
  //   if (this.passwordValidator.hasError('required')) {

  //     return 'You must enter a value';
  //   }
  //   if() {

  //     return this.passwordValidator.hasError('minLength')'Your password must be at least 5 characters'
  //   }

  //   if(this.passwordValidator.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  // }


}
