import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KickstandFormComponent } from './kickstand-form.component';

describe('KickstandFormComponent', () => {
  let component: KickstandFormComponent;
  let fixture: ComponentFixture<KickstandFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KickstandFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KickstandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
