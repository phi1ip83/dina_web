import { Component } from '@angular/core';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wheel',
  imports: [NgbCarouselModule],
  templateUrl: './wheel.component.html',
  styleUrl: './wheel.component.css'
})
export class WheelComponent {
  images = [
    './wheel/image1.png',
    './wheel/image2.jpg',
    './wheel/image3.png'
  ];
}
