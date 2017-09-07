import { Component } from '@angular/core';

@Component({
  //the element in index.html that will be replaced by this app
  selector: 'app', 
  templateUrl: "./partials/app.html"
})

export class AppComponent {
  name: string;
  artists: any;

  onClick(e) {
    this.name = e.target.innerHTML;
  }

  addArtist(value) {
    if(value !=="") {
      this.artists.push({
        name: value,
        school: "Shitarse high"
      })
    }
  }

  constructor() {
    this.name = "Oon Tah";
    this.artists = [
      {
        name: 'Jizzy Jeff II',
        school: "Theale Doss"
      },
      {
        name: 'Gaylord Mongewell',
        school: "Benson Primary School"
      },
      {
        name: 'T-Bone',
        school: "Crowmarch Whoresons"
      }
    ];
  }
}
