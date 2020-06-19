import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderseditComponent } from './gendersedit.component';

describe('GenderseditComponent', () => {
  let component: GenderseditComponent;
  let fixture: ComponentFixture<GenderseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
