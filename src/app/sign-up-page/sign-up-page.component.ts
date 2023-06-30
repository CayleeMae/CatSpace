import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit{

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
  ) {}

  ngOnInit(): void {

  }

  registrationForm = this.builder.group({
    id:this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.compose([Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$')])),
    email:this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    gender:this.builder.control('female'),
    role:this.builder.control(''),
    isActive:this.builder.control(false)
  });

  proceedRegistration() {
    if(this.registrationForm.valid){
      this.service.proceedRegister(this.registrationForm.value).subscribe(res => {
        this.toastr.success('Please contact admin to enable access','Registered Successfully');
        this.router.navigate(['login']);
      });
    }else{
      this.toastr.warning('Please enter valid data');
    }
  }

  onSubmit(): void {
    alert('Creating Your Profile.....');
    this.router.navigateByUrl('/home');
  }
}
