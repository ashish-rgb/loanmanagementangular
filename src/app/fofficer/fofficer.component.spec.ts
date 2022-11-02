import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FofficerComponent } from './fofficer.component';

describe('FofficerComponent', () => {
  let component: FofficerComponent;
  let fixture: ComponentFixture<FofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
