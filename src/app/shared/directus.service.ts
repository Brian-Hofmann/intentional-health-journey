import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DirectusResponse, Mission, Quote, Recipe, Recommendation, Service, Transaction} from "./service-types";
import { environment } from "../../environments/environment";
import {Observable, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DirectusService {

  constructor(private client: HttpClient) { }

  getRecipe(): Observable<DirectusResponse<Recipe>> {
    return this.client.get<DirectusResponse<Recipe>>(environment.directusBaseURL + '/items/recipe');
  }

  getQuote(): Observable<DirectusResponse<Quote>> {
    return this.client.get<DirectusResponse<Quote>>(environment.directusBaseURL + '/items/quote');
  }

  getRecommendation(): Observable<DirectusResponse<Recommendation>> {
    return this.client.get<DirectusResponse<Recommendation>>(environment.directusBaseURL + '/items/recommendation');
  }

  getMission(): Observable<DirectusResponse<Mission>> {
    return this.client.get<DirectusResponse<Mission>>(environment.directusBaseURL + '/items/mission');
  }

  getServices(): Observable<DirectusResponse<Service[]>> {
    return this.client.get<DirectusResponse<Service[]>>(environment.directusBaseURL + '/items/service');
  }

  getServiceById(id: string): Observable<DirectusResponse<Service>> {
    return this.client.get<DirectusResponse<Service>>(environment.directusBaseURL + '/items/service/' + id);
  }

  saveTransaction(data: Transaction): void {
    this.client.post(environment.directusBaseURL + '/items/transaction', data).pipe(take(1)).subscribe();
  }

}
