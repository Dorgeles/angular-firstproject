import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  ohSnap!: string;

  ngOnInit(): void {
      this.ohSnap = "Oh Snap";
  }

  onAddSnap() {
    if (this.ohSnap === "Oh Snap") {
      this.faceSnap.snaps ++;
      this.ohSnap = "No Snap";
    } else {
      this.faceSnap.snaps --;
      this.ohSnap = "Oh Snap";
    }
  }
}
