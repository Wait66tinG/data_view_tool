import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInputTaskComponent } from './dialog-input-task.component';

describe('DialogInputTaskComponent', () => {
  let component: DialogInputTaskComponent;
  let fixture: ComponentFixture<DialogInputTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogInputTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInputTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
