import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBrandsPresentationComponent } from './our-brands-presentation.component';

describe('OurBrandsPresentationComponent', () => {
  let component: OurBrandsPresentationComponent;
  let fixture: ComponentFixture<OurBrandsPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBrandsPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBrandsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
