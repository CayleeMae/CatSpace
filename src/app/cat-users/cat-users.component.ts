import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/assets/models/catInfo';
import { fakeCats } from 'src/assets/mockData/mock-cat-data';

@Component({
  selector: 'app-cat-users',
  templateUrl: './cat-users.component.html',
  styleUrls: ['./cat-users.component.scss']
})
export class CatUsersComponent implements OnInit{
  cats: Cat[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cats = fakeCats;

  }
}
