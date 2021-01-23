import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CONSTANTS } from '../../utils/constants';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public lbl: any = {
    locationError: 'Error al obtener tu ubicación',
    closeBtn: 'Cerrar'
  }
  constructor(private snack: MatSnackBar) {
    this.getCurrentLocation();
  }

  public ngOnInit(): void {

  }

  public getCurrentLocation(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      }, () => {
        this.snack.open(this.lbl.locationError, this.lbl.closeBtn, { duration: CONSTANTS.SNACK_TIME });
      });
    }
  }

}
