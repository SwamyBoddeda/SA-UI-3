import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDeliveryComponent } from './e-delivery.component';

describe('EDeliveryComponent', () => {
  let component: EDeliveryComponent;
  let fixture: ComponentFixture<EDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
