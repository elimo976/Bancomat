import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContanteComponent } from './contante.component';

describe('ContanteComponent', () => {
  let component: ContanteComponent;
  let fixture: ComponentFixture<ContanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContanteComponent]
    });
    fixture = TestBed.createComponent(ContanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
