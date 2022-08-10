import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermangerComponent } from './usermanger.component';

describe('UsermangerComponent', () => {
  let component: UsermangerComponent;
  let fixture: ComponentFixture<UsermangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
