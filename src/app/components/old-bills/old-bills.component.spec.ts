import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldBillsComponent } from './old-bills.component';

describe('OldBillsComponent', () => {
  let component: OldBillsComponent;
  let fixture: ComponentFixture<OldBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
