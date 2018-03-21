import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPmtpageComponent } from './buy-pmtpage.component';

describe('BuyPmtpageComponent', () => {
  let component: BuyPmtpageComponent;
  let fixture: ComponentFixture<BuyPmtpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyPmtpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyPmtpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
