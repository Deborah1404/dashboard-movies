import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsaddComponent } from './actorsadd.component';

describe('ActorsaddComponent', () => {
  let component: ActorsaddComponent;
  let fixture: ComponentFixture<ActorsaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
