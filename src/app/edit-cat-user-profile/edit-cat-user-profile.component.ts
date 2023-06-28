import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cat } from 'src/assets/models/catInfo';
import { fakeCats } from 'src/assets/mockData/mock-cat-data';

@Component({
  selector: 'app-edit-cat-user-profile',
  templateUrl: './edit-cat-user-profile.component.html',
  styleUrls: ['./edit-cat-user-profile.component.scss']
})
export class EditCatUserProfileComponent implements OnInit{

  cat!: Cat;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cat = fakeCats.find(cat => cat.id === id)!;

  }

  onSubmit(): void {
    alert('Your profile has been updated!');
    this.router.navigateByUrl('/cat/{{id}}');
  }
}
