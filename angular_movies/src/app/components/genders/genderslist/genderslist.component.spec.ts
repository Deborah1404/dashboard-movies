import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderslistComponent } from './genderslist.component';

describe('GenderslistComponent', () => {
  let component: GenderslistComponent;
  let fixture: ComponentFixture<GenderslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
