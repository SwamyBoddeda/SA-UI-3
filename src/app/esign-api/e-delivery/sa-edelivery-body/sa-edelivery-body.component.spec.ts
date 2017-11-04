import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaEdeliveryBodyComponent } from './sa-edelivery-body.component';

describe('SaEdeliveryBodyComponent', () => {
  let component: SaEdeliveryBodyComponent;
  let fixture: ComponentFixture<SaEdeliveryBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaEdeliveryBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaEdeliveryBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
