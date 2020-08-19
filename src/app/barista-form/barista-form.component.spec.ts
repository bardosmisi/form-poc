import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaristaFormComponent } from './barista-form.component';

describe('BaristaFormComponent', () => {
  let component: BaristaFormComponent;
  let fixture: ComponentFixture<BaristaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaristaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaristaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
