import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-cats',
  templateUrl: './new-cats.component.html',
  styleUrls: ['./new-cats.component.scss']
})
export class NewCatsComponent implements OnInit{
  email: string = '';
  password: string = '';

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
