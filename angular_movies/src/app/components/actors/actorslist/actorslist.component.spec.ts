import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorslistComponent } from './actorslist.component';

describe('ActorslistComponent', () => {
  let component: ActorslistComponent;
  let fixture: ComponentFixture<ActorslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
