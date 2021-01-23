import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'trackTime' })
export class TrackTimePipe implements PipeTransform {

  public transform(value: number): string {
    if (value === 0) return '0:00';
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + (value - minutes * 60);
  }
}