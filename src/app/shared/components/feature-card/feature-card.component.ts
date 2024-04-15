import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'
import { FeaturesModalComponent } from '../features-modal/features-modal.component';
import { IFeatures } from '../../../core/models/features.interface';
import { DateFormatPipe } from '../../../core/pipes/date-format.pipe';
import { TransformCoordinatesPipe } from '../../../core/pipes/transform-coordinates.pipe';
@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CardModule, ButtonModule, FeaturesModalComponent, DateFormatPipe, TransformCoordinatesPipe],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent {
  @Input() feature!: IFeatures;
  visible: boolean = false;


  showDialog() {
    this.visible = !this.visible;
  }
}

