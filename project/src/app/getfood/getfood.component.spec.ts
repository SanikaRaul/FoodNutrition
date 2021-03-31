import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfoodComponent } from './getfood.component';

describe('GetfoodComponent', () => {
  let component: GetfoodComponent;
  let fixture: ComponentFixture<GetfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
