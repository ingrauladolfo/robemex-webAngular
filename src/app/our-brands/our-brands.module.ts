import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurBrandsHomeComponent } from './components/our-brands-home/our-brands-home.component';
import { OurBrandsPresentationComponent } from './components/our-brands-presentation/our-brands-presentation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [OurBrandsHomeComponent, OurBrandsPresentationComponent],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [OurBrandsHomeComponent, OurBrandsPresentationComponent]
})
export class OurBrandsModule { }
