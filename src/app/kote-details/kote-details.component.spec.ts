import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoteDetailsComponent } from './kote-details.component';

describe('KoteDetailsComponent', () => {
  let component: KoteDetailsComponent;
  let fixture: ComponentFixture<KoteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
