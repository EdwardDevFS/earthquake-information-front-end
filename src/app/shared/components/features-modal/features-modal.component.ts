import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button'
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AvatarModule } from 'primeng/avatar';
import { IFeatures, IFeaturesResponse } from '../../../core/models/features.interface';
import { CommentsService } from '../../../core/services/comments.service';
import { ICommentsResponse } from '../../../core/models/comments.interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { DateFormatPipe } from '../../../core/pipes/date-format.pipe';
import { TransformCoordinatesPipe } from '../../../core/pipes/transform-coordinates.pipe';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-features-modal',
  standalone: true,
  imports: [
      DialogModule, 
      ButtonModule, 
      InputTextareaModule, 
      AvatarModule, 
      AsyncPipe, 
      DateFormatPipe, 
      TransformCoordinatesPipe,
      FormsModule,
      ToastModule
  ],
  providers: [MessageService],
  templateUrl: './features-modal.component.html',
  styleUrl: './features-modal.component.scss'
})
export class FeaturesModalComponent {
  public featureComments$ !: Observable<ICommentsResponse>;

  @Input() feature!: IFeatures;
  @Input() visible: boolean = false;
  @Output() onModalHide = new EventEmitter<boolean>();

  comment: string = "";


  constructor(private commentsService: CommentsService, private messageService: MessageService){}

  onShowHandle(): void
  {
    this.getComments();
  }

  getComments(): void
  {
    this.featureComments$ = this.commentsService.getComments(this.feature.id)
  }
  
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Feature comments', detail: 'The comment has been successfully registered' });
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

  async onSendComment(): Promise<any>
  {
      await this.commentsService.saveComment(this.feature.id, this.comment);
      this.comment = "";
      this.showSuccess();
      this.getComments();
  }

}
