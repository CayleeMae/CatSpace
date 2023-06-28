import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from 'src/assets/models/catInfo';

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

}
