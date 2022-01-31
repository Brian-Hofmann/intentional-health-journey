import { Injectable } from '@angular/core';
import {EmailPayload, EmailResponse} from "./service-types";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AwsEmailService {

  constructor(private client: HttpClient) { }

  public sendEmail(payload: EmailPayload): Observable<EmailResponse> {
    return this.client.post<EmailResponse>(environment.emailApiUrl, payload);
  }

}
