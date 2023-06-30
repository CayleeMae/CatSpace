import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { fakeCats } from 'src/assets/mockData/mock-cat-data';
import { Cat } from 'src/assets/models/catInfo';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{


  // public loginForm = new FormGroup({});
  // public emailFormControl = new FormControl('');
  // public passwordValidator = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]);
  cat!: Cat;
  userdata:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
  ) {
    sessionStorage.clear();
  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.cat = fakeCats.find(cat => cat.id === id)!;
  }

  public ngOnChanges() {
    console.log('fghjkl',this.loginForm.value);
  }

  loginForm=this.builder.group({
    username:this.builder.control('', Validators.required),
    password:this.builder.control('', Validators.required),
  })

  proceedLogin() {
    // if(this.loginForm.valid){
    //   this.service.proceedRegister(this.loginForm.value).subscribe(res => {
    //     this.toastr.success('Please contact admin to enable access','Registered Successfully');
    //     this.router.navigate(['login']);
    //   });
    // }else{
    //   this.toastr.warning('Please enter valid data');
    // }
    this.service.getByCode(this.loginForm.value.username).subscribe(res => {
      this.userdata = res;
      console.log(this.userdata);
      if(this.userdata.password === this.loginForm.value.password){
        if(this.userdata.isActive){
          sessionStorage.setItem('username', this.userdata.id);
          sessionStorage.setItem('userrole', this.userdata.role);
          this.router.navigate(['']);
        }else {
          this.toastr.error('Please contact admin', 'Inactive User');
        }
      } else {
        this.toastr.error('Invalid credentials');
      }
    });
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
