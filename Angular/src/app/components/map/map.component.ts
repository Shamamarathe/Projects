import { Component, OnInit,Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {latLng, MapOptions, tileLayer, Map, Marker, icon} from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
  
})

export class MapComponent implements OnInit {
  map:any = Map;
  mapOptions!: MapOptions;
  
 
  
  constructor(@Inject(MAT_DIALOG_DATA) public geo:any) { 
  }

  ngOnInit(): void {
    this.initializeMapOptions();
  }
  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(this.geo.lat, 0),
      zoom: 12,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };
  }

  private addSampleMarker() {
    const marker = new Marker([this.geo.lat, this.geo.lng])
      .setIcon(
        icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl:'assets/marker-icon.png'
        }));
    marker.addTo(this.map);
  }


}
