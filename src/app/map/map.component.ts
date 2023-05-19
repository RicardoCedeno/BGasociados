import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  ngOnInit(): void {
    this.initMap()
    this.createMarker()
    this.refreshMap()
    
    
  }

  map:L.Map
  marker1:L.Marker
  marker2:L.Marker

  initMap(){
    this.map=L.map('map').setView([10.3910, -75.4794], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map)
  }

  createMarker(){
    this.marker1=L.marker([51.5, -0.09]).addTo(this.map)
  }

  refreshMap(){
    navigator.geolocation.getCurrentPosition((position)=>{
      const {latitude, longitude}= position.coords

      this.marker1=L.marker([latitude, longitude]).addTo(this.map)

      navigator.geolocation.watchPosition((updatedPosition)=>{
        const {latitude:newLatitude, longitude:newLongitude} = updatedPosition.coords

        this.marker1.setLatLng([newLatitude, newLongitude])
      })
    })

  }
  
}
