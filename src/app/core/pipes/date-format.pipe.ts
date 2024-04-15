import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';


@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(date_to_format: string | Date): string {
    const date = typeof date_to_format === 'string' ? moment(date_to_format) : moment(date_to_format);
    return date.format('dddd, MMMM D, YYYY [at] H:mm');
  }

}
