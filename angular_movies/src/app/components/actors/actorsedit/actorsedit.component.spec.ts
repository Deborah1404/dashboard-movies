import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorseditComponent } from './actorsedit.component';

describe('ActorsEditComponent', () => {
  let component: ActorseditComponent;
  let fixture: ComponentFixture<ActorseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
