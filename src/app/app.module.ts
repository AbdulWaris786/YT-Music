import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { menuBarComponent } from './menuBar/menuBar.component';
import { signinBtnComponent } from './signInBtn/signInBtn.component';
import { searchBarComponent } from './searchBar/searchBar.component';
import { sideBarComponent } from './sideBar/sideBar.component';
import { mainBodyComponent } from './mainBody/mainBody.component';
import { sideButtonComponent } from './sideButton/sidebutton.component';
import { optionBarComponent } from './optionBar/option.component';
import { newReleaseComponent } from './newReleasesRow/rowOne.component';
import { secondRowComponent } from './quickPicks/secondRow.component';
import { whichArtistCompontent } from './whichArtist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    menuBarComponent,
    signinBtnComponent,
    searchBarComponent,
    sideBarComponent,
    mainBodyComponent,
    sideButtonComponent,
    optionBarComponent,
    newReleaseComponent,
    secondRowComponent,
    whichArtistCompontent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
