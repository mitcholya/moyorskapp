import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertDisplayComponent } from './advert-display.component';

describe('AdvertDisplayComponent', () => {
  let component: AdvertDisplayComponent;
  let fixture: ComponentFixture<AdvertDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
