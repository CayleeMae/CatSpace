import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatFriendsPageComponent } from './my-posts-page/my-posts-page.component';
import { CatUserProfilePageComponent } from './cat-user-profile-page/cat-user-profile-page.component';
import { CatUsersComponent } from './cat-users/cat-users.component';
import { EditCatUserProfileComponent } from './edit-cat-user-profile/edit-cat-user-profile.component';
import { HomeComponent } from './home/home.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { NewCatsComponent } from './new-cats/new-cats.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ComedyPageComponent } from './comedy-page/comedy-page.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { CatFactsPageComponent } from './cat-facts-page/cat-facts-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { GroupsPageComponent } from './groups-page/groups-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { InvitePageComponent } from './invite-page/invite-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cats', component: CatUsersComponent, pathMatch: 'full'},
  {path: 'cat/:id', component: CatUserProfilePageComponent},
  {path: 'message/:id', component: MessagePageComponent},
  {path: 'edit-profile/:id', component: EditCatUserProfileComponent},
  {path: 'friends', component: CatFriendsPageComponent},
  {path: 'new-cats', component: NewCatsComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'sign-up', component: SignUpPageComponent},
  {path: 'comedy', component: ComedyPageComponent},
  {path: 'music', component: MusicPageComponent},
  {path: 'cat-facts', component: CatFactsPageComponent},
  {path: 'favorites', component: FavoritesPageComponent},
  {path: 'groups', component: GroupsPageComponent},
  {path: 'events', component: EventsPageComponent},
  {path: 'invite', component: InvitePageComponent},
  {path: 'help', component: HelpPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'search', component: SearchPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
