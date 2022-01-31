import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss']
})
export class ViewContainerComponent {

  showResponsiveMenu = false;

  constructor(private router: Router) { }

  toggleResponsiveMenu() {
    this.showResponsiveMenu = !this.showResponsiveMenu;
  }

  routeToNewPage(path: string) {
    this.router.navigate([path]).then(() => {
      if (path !== '') {
        this.toggleResponsiveMenu();
      }
    });
  }

}
