import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillFormComponent } from './bill-form.component';

describe('BillFormComponent', () => {
  let component: BillFormComponent;
  let fixture: ComponentFixture<BillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
