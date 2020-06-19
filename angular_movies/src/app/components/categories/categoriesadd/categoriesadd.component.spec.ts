import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesaddComponent } from './categoriesadd.component';

describe('CategoriesaddComponent', () => {
  let component: CategoriesaddComponent;
  let fixture: ComponentFixture<CategoriesaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
