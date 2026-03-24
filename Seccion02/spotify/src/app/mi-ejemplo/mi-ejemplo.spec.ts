import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiEjemplo } from './mi-ejemplo';

describe('MiEjemplo', () => {
  let component: MiEjemplo;
  let fixture: ComponentFixture<MiEjemplo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiEjemplo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiEjemplo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
