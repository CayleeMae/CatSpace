import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from 'src/assets/models/catInfo';
import { fakeCats } from 'src/assets/mockData/mock-cat-data';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss']
})
export class MessagePageComponent implements OnInit{
  email: string = '';
  message: string =  '';

  cat!: Cat;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.cat = fakeCats.find(cat => cat.id === id)!;
      this.message = "Hi, I'm interested in being your friend";
  }

  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/cats');
  }
}
