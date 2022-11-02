import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateloanverificationListComponent } from './updateloanverification-list.component';

describe('UpdateloanverificationListComponent', () => {
  let component: UpdateloanverificationListComponent;
  let fixture: ComponentFixture<UpdateloanverificationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateloanverificationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateloanverificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
