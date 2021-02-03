import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  start: number = 1;
  count: number = 5;
  stepValue: number = 1;

  images: string[] = [
    '../../assets/Livello-slide-1.png',
    '../../assets/Livello-slide-2.png',
    '../../assets/Livello-bg1.png',
    '../../assets/Livello-bg2.png',
  ];

  img: string;

  constructor() {}

  ngOnInit(): void {
    this.img = this.images[0];
  }

  goToImg(dir: number): void {
    let arr = this.images;

    this.img = this.images.splice(dir, 1).join(''); // deleted
    dir ? arr.splice(0, 0, this.img) : arr.splice(arr.length, 0, this.img);
  }

  go(step): void {
    this.stepValue += step;
  }
}
