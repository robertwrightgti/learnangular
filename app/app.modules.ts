import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './component.app';
import { ArtistItemComponent } from './component.artist-item';


@NgModule({
  //which features to import
  imports: [
    BrowserModule, FormsModule
  ],
  //which custom components to use
  declarations: [
    AppComponent, ArtistItemComponent
  ],
  //the main root component
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}