import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquireProfileComponent } from './inquire-profile.component';

describe('InquireProfileComponent', () => {
  let component: InquireProfileComponent;
  let fixture: ComponentFixture<InquireProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquireProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquireProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
