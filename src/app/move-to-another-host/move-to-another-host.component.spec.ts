import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveToAnotherHostComponent } from './move-to-another-host.component';

describe('MoveToAnotherHostComponent', () => {
  let component: MoveToAnotherHostComponent;
  let fixture: ComponentFixture<MoveToAnotherHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveToAnotherHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveToAnotherHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
