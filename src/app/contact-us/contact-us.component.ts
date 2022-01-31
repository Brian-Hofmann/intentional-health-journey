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

  constructor(private fb: FormBuilder, private emailService: AwsEmailService) {
    this.contactForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comments: ['', Validators.required]
    })
  }

  resetForm() {
    this.contactForm.reset();
    Object.keys(this.contactForm.controls).forEach((key) => {
      const control = this.contactForm.controls[key];
      control.setErrors(null);
    });
  }

  onSubmit() {
    this.emailService.sendEmail(this.contactForm.value).subscribe((response: EmailResponse) => {
      this.resetForm();
    });
  }

}
