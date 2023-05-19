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
    this.refreshMap()
    this.setBgasociadosMarker()
    
    
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

  iconUser=L.icon({
    iconUrl:'https://cdn-icons-png.flaticon.com/512/3603/3603850.png',
    iconSize:[50,50],
    iconAnchor:[16,16],
  })

  iconBGasociados=L.icon({
    iconUrl:'https://cdn-icons-png.flaticon.com/512/1051/1051126.png',
    iconSize:[50,50],
    iconAnchor:[16,16],
  })
  

  refreshMap(){
    navigator.geolocation.getCurrentPosition((position)=>{
      const {latitude, longitude}= position.coords

      this.marker1=L.marker([latitude, longitude], {icon:this.iconUser}).addTo(this.map)

      navigator.geolocation.watchPosition((updatedPosition)=>{
        const {latitude:newLatitude, longitude:newLongitude} = updatedPosition.coords

        this.marker1.setLatLng([newLatitude, newLongitude])
      })
    })

  }

  setBgasociadosMarker(){
    this.marker2=L.marker([10.3947306,-75.4904092], {icon:this.iconBGasociados}).addTo(this.map)
  }
  
}
