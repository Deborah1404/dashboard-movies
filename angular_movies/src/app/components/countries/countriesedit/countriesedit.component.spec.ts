import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrieseditComponent } from './countriesedit.component';

describe('CountrieseditComponent', () => {
  let component: CountrieseditComponent;
  let fixture: ComponentFixture<CountrieseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrieseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrieseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
