import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class MapService {

  estado1:any[];

  constructor() { }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
  }
}
