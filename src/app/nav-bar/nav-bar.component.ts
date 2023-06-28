import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  public loggedIn = true;


  public topNavBLinks = [
    {
      name: 'Home',
      route: '',
    },
    {
      name: 'Browse',
      route: '/cats',
    },
    {
      name: 'Search',
      route: '',
    },
    {
      name: 'Invite',
      route: '',
    },
    {
      name: 'Blogs',
      route: '',
    },
    {
      name: 'Favorites',
      route: '',
    },
    {
      name: 'Groups',
      route: '',
    },
    {
      name: 'Events',
      route: '',
    },
    {
      name: 'Music',
      route: '',
    },
    {
      name: 'Comedy',
      route: '',
    },
  ];

}
