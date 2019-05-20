import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Delete4Component } from './delete4.component';

describe('Delete4Component', () => {
  let component: Delete4Component;
  let fixture: ComponentFixture<Delete4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Delete4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Delete4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
