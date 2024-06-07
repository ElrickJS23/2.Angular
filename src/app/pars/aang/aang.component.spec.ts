import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AangComponent } from './aang.component';

describe('AangComponent', () => {
  let component: AangComponent;
  let fixture: ComponentFixture<AangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AangComponent]
    });
    fixture = TestBed.createComponent(AangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
