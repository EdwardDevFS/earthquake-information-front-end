import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'
import { FeaturesModalComponent } from '../features-modal/features-modal.component';
import { IFeatures } from '../../../core/models/features.interface';
import { DateFormatPipe } from '../../../core/pipes/date-format.pipe';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CardModule, ButtonModule, FeaturesModalComponent, DateFormatPipe],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent {
  @Input() feature!: IFeatures;
  visible: boolean = false;
  // registered_at = this.feature.time;


  showDialog() {
    this.visible = !this.visible;
  }
}

