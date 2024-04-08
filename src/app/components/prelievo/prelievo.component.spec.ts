import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelievoComponent } from './prelievo.component';

describe('PrelievoComponent', () => {
  let component: PrelievoComponent;
  let fixture: ComponentFixture<PrelievoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrelievoComponent]
    });
    fixture = TestBed.createComponent(PrelievoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
