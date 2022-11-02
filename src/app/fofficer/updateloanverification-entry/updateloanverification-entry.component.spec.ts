import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateloanverificationEntryComponent } from './updateloanverification-entry.component';

describe('UpdateloanverificationEntryComponent', () => {
  let component: UpdateloanverificationEntryComponent;
  let fixture: ComponentFixture<UpdateloanverificationEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateloanverificationEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateloanverificationEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
