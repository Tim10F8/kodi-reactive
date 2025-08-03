import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToStr',
  standalone: true
})
export class SecondsToStringPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let minutes: number = Math.floor(value / 60);
    let secondsLeft: number = (value -( minutes) * 60);
    return `${minutes}:${secondsLeft > 9 ? secondsLeft : '0' + secondsLeft}`;
  }

}
