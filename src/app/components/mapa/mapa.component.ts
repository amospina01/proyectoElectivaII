import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  texto : string = 'Mapa';
  lat: number = 5.0688901;
  lng: number = -75.5173798;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

}
