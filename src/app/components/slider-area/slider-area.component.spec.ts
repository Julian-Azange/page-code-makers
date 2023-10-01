import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAreaComponent } from './slider-area.component';

describe('SliderAreaComponent', () => {
  let component: SliderAreaComponent;
  let fixture: ComponentFixture<SliderAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderAreaComponent]
    });
    fixture = TestBed.createComponent(SliderAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
