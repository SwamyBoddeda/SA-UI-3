import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaSidebarComponent } from './sa-sidebar.component';

describe('SaSidebarComponent', () => {
  let component: SaSidebarComponent;
  let fixture: ComponentFixture<SaSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
