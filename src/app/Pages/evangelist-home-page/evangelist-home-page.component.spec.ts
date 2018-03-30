import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvangelistHomePageComponent } from './evangelist-home-page.component';

describe('EvangelistHomePageComponent', () => {
  let component: EvangelistHomePageComponent;
  let fixture: ComponentFixture<EvangelistHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvangelistHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvangelistHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
