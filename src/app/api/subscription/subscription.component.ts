import { Component, OnInit, OnDestroy } from '@angular/core';
import { RazorpayService } from '../../core/service/razorpay.service'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']

})
export class SubscriptionComponent implements OnInit {
  plans: any[] = []
  myForm: FormGroup;
  plan_id: string;
  private formIdChangeSub: Subscription;
  private formQuantityChangeSub: Subscription;
  private formCountChangeSub: Subscription;
  currentStep: number = 1;
  selectedPlanID: string = '';
  selectedPlanData: any;
  selectedTotalAmount: any;
  quantity: number;
  total_count: number
  constructor(private rzp: RazorpayService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.allPlans();
    this.initForm();
  }

  ngOnDestroy() {
    if (this.formIdChangeSub && this.formQuantityChangeSub && this.formCountChangeSub) {
      this.formIdChangeSub.unsubscribe();
      this.formQuantityChangeSub.unsubscribe();
      this.formCountChangeSub.unsubscribe();
    }
  }

  allPlans() {
    this.rzp.getPlans().subscribe(data => { this.plans = data.fetchRzpData.items },
      error => { console.log(error); });
  }

  initForm() {
    this.myForm = this.fb.group({
      plan_id: [this.plan_id, Validators.required],
      total_count: ['', Validators.required],
      // email: ['', Validators.required],
      // phonenumber: ['', Validators.required],
      quantity: ['', Validators.required],
    });
    this.formIdChangeSub = this.myForm.controls.plan_id.valueChanges.subscribe(res => { });
    this.formCountChangeSub = this.myForm.controls.total_count.valueChanges.subscribe(res => { this.total_count = res });
  }

  setCurrentStep(i: 1 | 2 | 3 | 4) {
    this.currentStep = i;
  }

  selectChangeHandler(event: any) {
    this.selectedPlanID = event.target.value;
    this.selectedPlanData = this.plans.find(i => i.id === this.selectedPlanID);
    this.formQuantityChangeSub = this.myForm.controls.quantity.valueChanges.subscribe(res => {
      this.quantity = res
      this.selectedTotalAmount = this.selectedPlanData.item.amount * this.quantity
    });
  }

  nextStep() {
    this.currentStep = (this.currentStep < 4) ? this.currentStep + 1 : 4;
  }

  previousStep() {
    this.currentStep = (this.currentStep > 1) ? this.currentStep - 1 : 1;
  }

  async onSubmit(data) {
    console.log("hello")
    console.log(data)
    if (this.myForm.valid) {
      console.log(this.myForm.value)
      const data = this.myForm.value
      this.rzp.getSubscription(data)
      console.log(data)
      return data
    }
    else {
      console.error("error");
      this.myForm.reset();
    }
  }
}
