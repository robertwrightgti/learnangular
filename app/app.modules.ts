import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './component.app';
import { ArtistItemComponent } from './component.artist-item';
import { ArtistDetailsComponent } from './component.artist-details';
import { SearchPipe } from './pipe.search';


@NgModule({
  //which features to import
  imports: [
    BrowserModule, FormsModule
  ],
  //which custom components to use
  declarations: [
    AppComponent, ArtistItemComponent, ArtistDetailsComponent, SearchPipe
  ],
  //the main root component
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}