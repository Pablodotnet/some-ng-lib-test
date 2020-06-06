import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PabloDetailsComponent } from './pablo-details.component';

describe('PabloDetailsComponent', () => {
  let component: PabloDetailsComponent;
  let fixture: ComponentFixture<PabloDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PabloDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PabloDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
