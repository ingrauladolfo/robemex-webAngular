import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from './shared/shared.module';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { HomeModule } from './home/home.module';
import { OurCompanyModule } from './our-company/our-company.module';
import { OurBrandsModule } from './our-brands/our-brands.module';
import { OurCatalogueModule } from './our-catalogue/our-catalogue.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ContactUsModule } from './contact-us/contact-us.module';
import { LegalModule } from './legal/legal.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    OurCompanyModule,
    OurBrandsModule,
    OurCatalogueModule,
    ContactUsModule,
    LegalModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    NgxExtendedPdfViewerModule,
    CarouselModule, WavesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
