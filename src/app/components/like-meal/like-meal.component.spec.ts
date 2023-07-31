import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeMealComponent } from './like-meal.component';

describe('LikeMealComponent', () => {
  let component: LikeMealComponent;
  let fixture: ComponentFixture<LikeMealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikeMealComponent]
    });
    fixture = TestBed.createComponent(LikeMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
