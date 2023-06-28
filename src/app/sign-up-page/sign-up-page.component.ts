import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit{

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {

  }

  onSubmit(): void {
    alert('Creating Your Profile.....');
    this.router.navigateByUrl('/home');
  }
}
