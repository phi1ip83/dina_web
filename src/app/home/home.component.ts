import { Component } from '@angular/core';
import { WheelComponent } from '../wheel/wheel.component';

@Component({
  selector: 'app-home',
  imports: [WheelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
