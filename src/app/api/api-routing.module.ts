import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerComponent } from './customer/customer.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
    { path: "", component: CustomerComponent },
    { path: "create-subscription", component: SubscriptionComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApiRoutingModule { }
