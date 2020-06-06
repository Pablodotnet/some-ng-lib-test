import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PabloLiboneComponent } from './pablo-libone.component';

describe('PabloLiboneComponent', () => {
  let component: PabloLiboneComponent;
  let fixture: ComponentFixture<PabloLiboneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PabloLiboneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PabloLiboneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
