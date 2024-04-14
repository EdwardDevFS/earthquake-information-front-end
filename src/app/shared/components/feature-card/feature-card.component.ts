import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CardModule, ButtonModule, DialogModule],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent {
  @Input() title: string = '65 km ESE of Pedro Bay, Alaska';
  @Input() magnitude: number = 1.5;
  @Input() longitude: string = '59.5786';
  @Input() latitude: string = '-153.0243';
  @Input() time: string = 'Monday 15th at 2024';
  @Input() url: string = 'https://earthquake.usgs.gov/earthquakes/eventpage/us7000mbam';

  registered_at = this.time;
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}

