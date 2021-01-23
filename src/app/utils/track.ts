import { CONSTANTS } from './constants';
export class Track {
  public id: number;
  public name: string;
  public artist: string;
  public image: string;
  public duration: number;

  constructor() {
    this.duration = CONSTANTS.ZERO;
    this.id = CONSTANTS.ZERO;
  }
}

