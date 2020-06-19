import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieseditComponent } from './categoriesedit.component';

describe('CategorieseditComponent', () => {
  let component: CategorieseditComponent;
  let fixture: ComponentFixture<CategorieseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
