import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsViewComponent } from './contact-us-view.component';

describe('ContactUsViewComponent', () => {
  let component: ContactUsViewComponent;
  let fixture: ComponentFixture<ContactUsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
