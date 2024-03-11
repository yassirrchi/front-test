import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddBarComponent } from './list-add-bar.component';

describe('ListAddBarComponent', () => {
  let component: ListAddBarComponent;
  let fixture: ComponentFixture<ListAddBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAddBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAddBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
