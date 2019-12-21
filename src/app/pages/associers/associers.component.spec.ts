import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociersComponent } from './associers.component';

describe('AssociersComponent', () => {
  let component: AssociersComponent;
  let fixture: ComponentFixture<AssociersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
