import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureCardComponent } from './shared/components/feature-card/feature-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeatureCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'earthquake-information-frontend';
}
