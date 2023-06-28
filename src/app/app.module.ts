import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { CatUsersComponent } from './cat-users/cat-users.component';
import { CatUserProfilePageComponent } from './cat-user-profile-page/cat-user-profile-page.component';
import { MessagePageComponent } from './message-page/message-page.component';
import { CatFriendsPageComponent } from './my-posts-page/my-posts-page.component';
import { NewCatsComponent } from './new-cats/new-cats.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CatUserFormComponent } from './cat-user-form/cat-user-form.component';
import { EditCatUserProfileComponent } from './edit-cat-user-profile/edit-cat-user-profile.component';
import { FooterComponent } from './footer/footer.component';
import { ComedyPageComponent } from './comedy-page/comedy-page.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { CatFactsPageComponent } from './cat-facts-page/cat-facts-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { GroupsPageComponent } from './groups-page/groups-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { InvitePageComponent } from './invite-page/invite-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatUsersComponent,
    CatUserProfilePageComponent,
    MessagePageComponent,
    CatFriendsPageComponent,
    NewCatsComponent,
    LoginPageComponent,
    SignUpPageComponent,
    NavBarComponent,
    CatUserFormComponent,
    EditCatUserProfileComponent,
    FooterComponent,
    ComedyPageComponent,
    MusicPageComponent,
    CatFactsPageComponent,
    FavoritesPageComponent,
    GroupsPageComponent,
    EventsPageComponent,
    InvitePageComponent,
    SearchPageComponent,
    HelpPageComponent,
    AboutPageComponent,
    ContactPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
