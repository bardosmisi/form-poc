import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoelaceFormComponent } from './shoelace-form.component';

describe('ShoelaceFormComponent', () => {
  let component: ShoelaceFormComponent;
  let fixture: ComponentFixture<ShoelaceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoelaceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoelaceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
