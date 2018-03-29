import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SydComponent } from './syd.component';

describe('SydComponent', () => {
  let component: SydComponent;
  let fixture: ComponentFixture<SydComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SydComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SydComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
