import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAutomotiveComponent } from './list-automotive.component';

describe('ListAutomotiveComponent', () => {
  let component: ListAutomotiveComponent;
  let fixture: ComponentFixture<ListAutomotiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAutomotiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAutomotiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
