import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { ApiRoutingModule } from "./api-routing.module";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SubscriptionComponent } from './subscription/subscription.component';

@NgModule({
  declarations: [CustomerComponent, SubscriptionComponent],
  imports: [
    CommonModule,
    ApiRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  exports: [
    CustomerComponent, SubscriptionComponent
  ]
})
export class ApiModule { }
