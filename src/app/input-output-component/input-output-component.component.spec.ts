import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputComponentComponent } from './input-output-component.component';

describe('InputOutputComponentComponent', () => {
  let component: InputOutputComponentComponent;
  let fixture: ComponentFixture<InputOutputComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOutputComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
