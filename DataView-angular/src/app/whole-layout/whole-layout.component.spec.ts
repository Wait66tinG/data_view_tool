import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeLayoutComponent } from './whole-layout.component';

describe('WholeLayoutComponent', () => {
  let component: WholeLayoutComponent;
  let fixture: ComponentFixture<WholeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
