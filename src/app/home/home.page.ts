import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonButtons, IonButton, IonMenuButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonButtons, IonButton, IonMenuButton],
})
export class HomePage {
  counters: { [key: string]: number } = {
    banana: 0,
    apple: 0,
    pear: 0,
    grape: 0,
    lemon: 0
  };

  constructor() {}

  increment(fruit: string) {
    if (this.counters.hasOwnProperty(fruit)) {
      this.counters[fruit]++;
    }
  }

  reset() {
    this.counters = {
      banana: 0,
      apple: 0,
      pear: 0,
      grape: 0,
      lemon: 0
    };
  }
}
