import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  mySnap2!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = {
      title: 'Dorgeles',
      description: "Il s'agit d'une photo simple",
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg',
      location: "Abidjan"
      };

    this.mySnap2 = {
      title: 'le mal',
      description: "il s'agit de la photo du mal",
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    };
  }
}
