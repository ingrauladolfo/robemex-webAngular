import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsHomeComponent } from './components/contact-us-home/contact-us-home.component';
import { ContactUsViewComponent } from './components/contact-us-view/contact-us-view.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ContactUsHomeComponent, ContactUsViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],exports: [ContactUsHomeComponent, ContactUsViewComponent]
})
export class ContactUsModule { }
