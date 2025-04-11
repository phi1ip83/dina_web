import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, NavComponent, BannerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dina_web';
}
