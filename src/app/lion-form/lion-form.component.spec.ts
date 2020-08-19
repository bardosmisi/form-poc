import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LionFormComponent } from './lion-form.component';

describe('LionFormComponent', () => {
  let component: LionFormComponent;
  let fixture: ComponentFixture<LionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
