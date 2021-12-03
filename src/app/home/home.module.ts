import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SlidesHomeComponent } from './components/slides-home/slides-home.component';
import { RouterModule } from '@angular/router';
// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'


@NgModule({
  declarations: [HomeComponent, SlidesHomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule, WavesModule
  ],exports: [HomeComponent, SlidesHomeComponent]
})
export class HomeModule { }
