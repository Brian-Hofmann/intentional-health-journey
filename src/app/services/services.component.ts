import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Service} from "../shared/service-types";
import {DirectusService} from "../shared/directus.service";
import {take} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {isDonation} from "../shared/utils";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  environment = environment;
  services: Service[] = [];

  constructor(
    private directusService: DirectusService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.directusService.getServices().pipe(take(1)).subscribe(response => {
      this.services = response.data;
    })
  }

  parseLocation(location: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(location.replace(/\\"/g, '"'));
  }

  isDonation(price: string): boolean {
    return isDonation(price);
  }

  routeToCheckout(serviceId: number) {
    this.router.navigate(['checkout'], { queryParams: { serviceId: serviceId } })
  }

}
