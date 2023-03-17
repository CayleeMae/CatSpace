import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public topNavTLinks = [
    {
      name: 'Help',
      route: ''
    },
    {
      name: 'Login',
      route: ''
    },
    {
      name: 'SiguUp',
      route: ''
    },

  ]

  public topNavBLinks = [
    {
      name: 'Home',
      route: ''
    },
    {
      name: 'Browse',
      route: ''
    },
    {
      name: 'Search',
      route: ''
    },
    {
      name: 'Invite',
      route: ''
    },
    {
      name: 'Blogs',
      route: ''
    },
    {
      name: 'Favorites',
      route: ''
    },
    {
      name: 'Groups',
      route: ''
    },
    {
      name: 'Events',
      route: ''
    },
    {
      name: 'Music',
      route: ''
    },
    {
      name: 'Comedy',
      route: ''
    }
  ]
  public newCats: any[] = [];
  public catFacts: any[] =[];
  public logo = '';

  ngOnInit(): void {
  }
}
