import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PabloHomeComponent } from './pablo-home.component';

describe('PabloHomeComponent', () => {
  let component: PabloHomeComponent;
  let fixture: ComponentFixture<PabloHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PabloHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PabloHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
