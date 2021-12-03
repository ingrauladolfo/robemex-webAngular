import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { NoticeOfPrivacyComponent } from './components/notice-of-privacy/notice-of-privacy.component';
import { RouterModule } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';



@NgModule({
  declarations: [TermsAndConditionsComponent, NoticeOfPrivacyComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxExtendedPdfViewerModule
  ],exports: [TermsAndConditionsComponent, NoticeOfPrivacyComponent]
})
export class LegalModule { }
