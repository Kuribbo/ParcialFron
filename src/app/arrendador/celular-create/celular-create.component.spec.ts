import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularCreateComponent } from './celular-create.component';

describe('CelularCreateComponent', () => {
  let component: CelularCreateComponent;
  let fixture: ComponentFixture<CelularCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CelularCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CelularCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
