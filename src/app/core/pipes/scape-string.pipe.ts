import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scapeString',
  standalone: true
})
export class ScapeStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
