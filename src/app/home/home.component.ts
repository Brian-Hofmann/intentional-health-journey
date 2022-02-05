import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DirectusService} from "../shared/directus.service";
import {Quote, Recipe, Recommendation} from "../shared/service-types";
import {take} from "rxjs";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recipe: Recipe;
  quote: Quote;
  recommendation: Recommendation;
  environment = environment;

  constructor(private router: Router, private directusService: DirectusService) { }

  ngOnInit(): void {
    this.directusService.getRecipe().pipe(take(1)).subscribe(response => {
      this.recipe = response.data;
    });
    this.directusService.getQuote().pipe(take(1)).subscribe(response => {
      this.quote = response.data;
    });
    this.directusService.getRecommendation().pipe(take(1)).subscribe(response => {
      this.recommendation = response.data;
    });
  }

  scrollToContent(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  routeToNewPage(path: string) {
    this.router.navigate([path]);
  }

  openDocument(fileId: string) {
    window.open(environment.directusBaseURL + '/assets/' + fileId)
  }

}
