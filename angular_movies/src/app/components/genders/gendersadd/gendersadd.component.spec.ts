import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GendersaddComponent } from './gendersadd.component';

describe('GendersaddComponent', () => {
  let component: GendersaddComponent;
  let fixture: ComponentFixture<GendersaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GendersaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GendersaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
