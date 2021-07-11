import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule, FormsModule],
  exports: [RouterModule, ReactiveFormsModule, HttpClientModule, FormsModule]
})
export class CoreModule { }
