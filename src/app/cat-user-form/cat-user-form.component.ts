import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cat } from 'src/assets/models/catInfo';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cat-user-form',
  templateUrl: './cat-user-form.component.html',
  styleUrls: ['./cat-user-form.component.scss']
})
export class CatUserFormComponent implements OnInit{
  @Input() buttonText = '';
  @Input() currentEmail = '';
  @Input() currentPassword = '';
  @Input() currentName = '';
  @Input() currentDescription = '';

  email: string = '';
  password: string = '';
  name: string = '';
  description = '';

  @Output() onSubmit = new EventEmitter<Cat>();

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
  ) {}


  ngOnInit(): void {
    this.email = this.currentEmail;
    this.password = this.currentPassword;
    this.name = this.currentName;
    this.description = this.currentDescription;
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: null!,
      name: this.name,
      description: this.description,
      email: this.email,
      password: this.password,
    });
  }

  registrationForm = this.builder.group({
    id:this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
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

}
