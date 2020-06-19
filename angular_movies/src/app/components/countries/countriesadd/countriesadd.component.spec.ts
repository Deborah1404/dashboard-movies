import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesaddComponent } from './countriesadd.component';

describe('CountriesaddComponent', () => {
  let component: CountriesaddComponent;
  let fixture: ComponentFixture<CountriesaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
