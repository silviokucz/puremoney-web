import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEvngelistPageComponent } from './register-evangelist-page.component';

describe('RegisterPageComponent', () => {
  let component: RegisterEvngelistPageComponent;
  let fixture: ComponentFixture<RegisterEvngelistPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEvngelistPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEvngelistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
