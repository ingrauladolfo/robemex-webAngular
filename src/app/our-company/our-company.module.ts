import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurCompanyHomeComponent } from './components/our-company-home/our-company-home.component';
import { OurCompanyCardsComponent } from './components/our-company-cards/our-company-cards.component';



@NgModule({
  declarations: [OurCompanyHomeComponent, OurCompanyCardsComponent],
  imports: [
    CommonModule
  ],exports: [OurCompanyHomeComponent, OurCompanyCardsComponent]
})
export class OurCompanyModule { }
