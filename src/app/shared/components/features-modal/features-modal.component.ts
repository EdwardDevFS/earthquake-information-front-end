import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button'
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AvatarModule } from 'primeng/avatar';
import { IFeatures } from '../../../core/models/features.interface';
import { CommentsService } from '../../../core/services/comments.service';
import { ICommentsResponse } from '../../../core/models/comments.interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { DateFormatPipe } from '../../../core/pipes/date-format.pipe';

@Component({
  selector: 'app-features-modal',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextareaModule, AvatarModule, AsyncPipe, DateFormatPipe],
  templateUrl: './features-modal.component.html',
  styleUrl: './features-modal.component.scss'
})
export class FeaturesModalComponent {
  public featureComments$ !: Observable<ICommentsResponse>;

  @Input() feature!: IFeatures;
  @Input() visible: boolean = false;
  @Output() onModalHide = new EventEmitter<boolean>();

  constructor(private commentsService: CommentsService){}

  onShowHandle(): void
  {
    this.featureComments$ = this.commentsService.getComments(this.feature.id)
  }

  onHideHandle(): void
  {
    this.onModalHide.emit();
  }

  transformDate(fechaStr: any): string
  {
    const fecha = new Date(fechaStr);
    const options: Intl.DateTimeFormatOptions  = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return fecha.toLocaleDateString('en-US', options);
  }
}
