import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAreaComponent } from './services-area.component';

describe('ServicesAreaComponent', () => {
  let component: ServicesAreaComponent;
  let fixture: ComponentFixture<ServicesAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesAreaComponent]
    });
    fixture = TestBed.createComponent(ServicesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
