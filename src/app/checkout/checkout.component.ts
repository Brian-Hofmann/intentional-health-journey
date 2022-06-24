import {Component, OnInit} from '@angular/core';
import {IClientAuthorizeCallbackData, ICreateOrderRequest, IPayPalConfig} from "ngx-paypal";
import {environment} from "../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {switchMap, take} from "rxjs";
import {DirectusService} from "../shared/directus.service";
import {Service, Transaction} from "../shared/service-types";
import {isDonation} from "../shared/utils";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  service: Service;
  isDonation: boolean;
  donationAmount = 1;
  payPalConfig: IPayPalConfig;
  error: boolean;
  success: boolean;

  constructor(
    private route: ActivatedRoute,
    private directusService: DirectusService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      switchMap(params => this.directusService.getServiceById(params['serviceId'])), take(1)
    ).subscribe(service => {
      this.service = service.data;
      this.isDonation = isDonation(service.data.price);
      this.initPaypalConfig(service.data);
    });
  }

  get cardTitle(): string {
    if (this.success) {
      return this.isDonation ? 'Donation Successful' : 'Purchase Successful'
    } else if (this.error) {
      return 'An Error Has Occurred'
    } else {
      return this.isDonation ? 'Donate' : 'Purchase Service'
    }
  }

  get successMessage(): string {
    if (this.isDonation) {
      return 'Successfully Donated: $' + this.fixedDonationAmount;
    } else {
      return 'Successfully Purchased: ' + this.service?.name + ' for $' + this.service?.price;
    }
  }

  get fixedDonationAmount(): string {
    return this.donationAmount.toFixed(2).toString();
  }

  keyDownHandler(e: KeyboardEvent): void {
    const target = e.target as HTMLInputElement;
    const split = target.value.split('.');
    if (split[1] && split[1].length > 2) {
      target.value = Number(target.value).toFixed(2).toString();
    }
  }

  handleConfirmAmount(): void {
    this.initPaypalConfig(this.service, this.fixedDonationAmount);
  }

  saveSuccessfulTransaction(data: IClientAuthorizeCallbackData): void {
    const payload = {
      firstName: data.payer.name?.given_name,
      lastName: data.payer.name?.surname,
      email: data.payer.email_address,
      serviceName: this.service.name,
      total: data.purchase_units[0]?.amount.value
    } as Transaction
    this.directusService.saveTransaction(payload);
  }

  private initPaypalConfig(service: Service, price?: string): void {
    console.log(price)
    this.payPalConfig = {
      currency: 'USD',
      clientId: environment.paypalClientId,
      createOrderOnClient: () => <ICreateOrderRequest> {
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: price ?? service.price,
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: price ?? service.price
              }
            }
          },
          items: [{
            name: price ?? service.name,
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'USD',
              value: price ?? service.price,
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
        shape: 'pill'
      },
      onClientAuthorization: (data) => {
        this.saveSuccessfulTransaction(data);
        this.success = true;
      },
      onError: err => {
        console.error(err);
        this.error = true;
      }
    }
  }

}
