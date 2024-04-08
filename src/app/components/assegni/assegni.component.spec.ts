import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssegniComponent } from './assegni.component';

describe('AssegniComponent', () => {
  let component: AssegniComponent;
  let fixture: ComponentFixture<AssegniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssegniComponent]
    });
    fixture = TestBed.createComponent(AssegniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
