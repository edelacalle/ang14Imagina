import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'elevado'
})
export class ElevadoPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return Math.pow ( value as number , args[0] as number )
  }

}
