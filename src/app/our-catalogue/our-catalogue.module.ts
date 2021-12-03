import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurCatalogueHomeComponent } from './components/our-catalogue-home/our-catalogue-home.component';
import { OurCataloguePdfComponent } from './components/our-catalogue-pdf/our-catalogue-pdf.component';
import { RouterModule } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';



@NgModule({
  declarations: [OurCatalogueHomeComponent, OurCataloguePdfComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxExtendedPdfViewerModule
  ], exports: [OurCatalogueHomeComponent, OurCataloguePdfComponent]
})
export class OurCatalogueModule { }
