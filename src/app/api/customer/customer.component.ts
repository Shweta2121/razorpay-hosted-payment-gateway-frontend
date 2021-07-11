import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RazorpayService } from '../../core/service/razorpay.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private rzp: RazorpayService, public router: Router
  ) { }

  ngOnInit(): void {
    +
      this.initForm();
  }
  initForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required],],
      email: ['', [Validators.required, Validators.email],],
      // contno: ['', [Validators.required],],
      // gstin: ['', [Validators.required],],
    });
  }
  onSubmit(data) {
    if (this.form.valid) {
      this.rzp.getCustomer(data)
      console.log(data)
      this.router.navigate(['/create-subscription'])
      return data
    }
    else {
      console.error("error");
      this.form.reset();
    }
  }
}
