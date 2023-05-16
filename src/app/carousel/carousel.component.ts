import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  images=[
    'assets/home/presentacion-impuestos.png',
    'assets/home/seguridad-social.png',
    'assets/home/requerimientos.jpg',
    'assets/home/soluciones.png',
    'assets/home/modelo.jpg',
  ]

}
