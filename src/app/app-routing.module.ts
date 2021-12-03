import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { OurCompanyHomeComponent } from './our-company/components/our-company-home/our-company-home.component';
import { OurBrandsHomeComponent } from './our-brands/components/our-brands-home/our-brands-home.component';
import { OurCatalogueHomeComponent } from './our-catalogue/components/our-catalogue-home/our-catalogue-home.component';
import { ContactUsHomeComponent } from './contact-us/components/contact-us-home/contact-us-home.component';
import { NoticeOfPrivacyComponent } from './legal/components/notice-of-privacy/notice-of-privacy.component';
import { TermsAndConditionsComponent } from './legal/components/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'nosotros', component: OurCompanyHomeComponent},
  {path: 'productos', component: OurBrandsHomeComponent},
  {path:'catalogo', component:OurCatalogueHomeComponent},
  {path: 'contacto', component: ContactUsHomeComponent},
  {path:'aviso-de-privacidad', component: NoticeOfPrivacyComponent},
  {path: 'terminos-y-condiciones', component: TermsAndConditionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
