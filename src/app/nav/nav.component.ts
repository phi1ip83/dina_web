import { Component } from '@angular/core';
import { NgbCollapseModule, NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [NgbCollapseModule, RouterLink, NgbDropdown, NgbModule] ,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isMenuCollapsed = true;

}
