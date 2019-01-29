import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoteComponent } from './kote.component';

describe('KoteComponent', () => {
  let component: KoteComponent;
  let fixture: ComponentFixture<KoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
