import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoteFormComponent } from './kote-form.component';

describe('KoteFormComponent', () => {
  let component: KoteFormComponent;
  let fixture: ComponentFixture<KoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
