import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-banner',
  imports: [RouterLink, NgClass],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  class1 = ['test1','test2'];
}
