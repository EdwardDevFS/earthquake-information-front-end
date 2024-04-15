import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformCoordinates',
  standalone: true
})
export class TransformCoordinatesPipe implements PipeTransform {

  transform(value: string | number, isLongitud: boolean = true): string {
    value = typeof value == "string"? Number(value): value;
    if (isLongitud) {
      const direction = value >= 0 ? 'E' : 'W';
      const degrees = Math.abs(Math.floor(value));
      const minutes = Math.abs(Math.floor((value - degrees) * 60));
      const seconds = Math.abs((value - degrees - minutes / 60) * 3600).toFixed(2);
      return `${degrees}° ${minutes}' ${seconds}" ${direction}`;
    } else {
      const direction = value >= 0 ? 'N' : 'S';
      const degrees = Math.abs(Math.floor(value));
      const minutes = Math.abs(Math.floor((value - degrees) * 60));
      const seconds = Math.abs((value - degrees - minutes / 60) * 3600).toFixed(2);
      return `${degrees}° ${minutes}' ${seconds}" ${direction}`;
    }
  }

}
