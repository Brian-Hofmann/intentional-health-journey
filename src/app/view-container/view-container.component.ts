import { Component } from '@angular/core';

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss']
})
export class ViewContainerComponent {

  showResponsiveMenu = false;

  toggleResponsiveMenu() {
    this.showResponsiveMenu = !this.showResponsiveMenu;
  }

}
