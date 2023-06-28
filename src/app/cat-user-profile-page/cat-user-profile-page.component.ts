import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeCats } from 'src/assets/mockData/mock-cat-data';
import { Cat } from 'src/assets/models/catInfo';

@Component({
  selector: 'app-cat-user-profile-page',
  templateUrl: './cat-user-profile-page.component.html',
  styleUrls: ['./cat-user-profile-page.component.scss']
})
export class CatUserProfilePageComponent implements OnInit{

  cat!: Cat;
  loggedIn = true;

  constructor(
    private route: ActivatedRoute,
  ) {}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cat = fakeCats.find(cat => cat.id === id)!;
  }

  onDeleteClicked(catId: string): void {
    alert(`Deleting profile id: ${catId} from database`);
  }
}
