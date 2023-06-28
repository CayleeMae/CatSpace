import { Component, OnInit } from '@angular/core';
import { fakeCats } from 'src/assets/mockData/mock-cat-data';
import { Cat } from 'src/assets/models/catInfo';

@Component({
  selector: 'app-cat-friends-page',
  templateUrl: './my-posts-page.component.html',
  styleUrls: ['./my-posts-page.component.scss']
})
export class CatFriendsPageComponent implements OnInit{

  cats: Cat[] = [];

  constructor() {}

  ngOnInit(): void {
      this.cats = fakeCats;
  }

  onDeleteClicked(catId: string): void {
    alert(`Removing cat with id ${catId} from your friends.`);
  }
}
