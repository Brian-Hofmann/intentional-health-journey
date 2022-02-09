import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AwsEmailService} from "../shared/aws-email.service";
import {EmailResponse} from "../shared/service-types";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  contactForm: FormGroup;
  formSubmitted = false;
  submittingForm = false;

  constructor(private fb: FormBuilder, private emailService: AwsEmailService) {
    this.contactForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comments: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submittingForm = true;
    this.emailService.sendEmail(this.contactForm.value).subscribe((response: EmailResponse) => {
      this.submittingForm = false;
      this.contactForm.reset();
      this.formSubmitted = true;
    });
  }

  get formEmailAddress(): string {
    return this.contactForm.get('email')!.value;
  }

}
