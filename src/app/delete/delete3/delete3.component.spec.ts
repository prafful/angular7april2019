import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Delete3Component } from './delete3.component';

describe('Delete3Component', () => {
  let component: Delete3Component;
  let fixture: ComponentFixture<Delete3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Delete3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Delete3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
