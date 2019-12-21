import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatageriosComponent } from './catagerios.component';

describe('CatageriosComponent', () => {
  let component: CatageriosComponent;
  let fixture: ComponentFixture<CatageriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatageriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatageriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
