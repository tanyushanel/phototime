import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  Form,
} from '@angular/forms';

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

  form: FormGroup;

  emailControl: FormControl;
  isSubscribed: boolean = false;

  emailes: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.img = this.images[0];

    this.emailControl = new FormControl('', Validators.required);
    this.form = new FormGroup({
      email: this.emailControl,
    });
  }

  goToImg(dir: number): void {
    let arr = this.images;
    this.img = this.images.splice(dir, 1).join(''); // deleted
    dir ? arr.splice(0, 0, this.img) : arr.splice(arr.length, 0, this.img);
  }

  go(step: number): void {
    this.stepValue += step;
  }

  subscribe(email: string): void {
    this.emailes.push(email);
    this.isSubscribed = true;
  }
}
