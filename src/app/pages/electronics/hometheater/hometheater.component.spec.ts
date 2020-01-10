import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometheaterComponent } from './hometheater.component';

describe('HometheaterComponent', () => {
  let component: HometheaterComponent;
  let fixture: ComponentFixture<HometheaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometheaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
