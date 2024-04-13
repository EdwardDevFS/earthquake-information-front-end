import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent {

  title: string = "diavlo";

}
