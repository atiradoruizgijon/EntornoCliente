import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjuntoTragaperrasComponent } from './conjunto-tragaperras.component';

describe('ConjuntoTragaperrasComponent', () => {
  let component: ConjuntoTragaperrasComponent;
  let fixture: ComponentFixture<ConjuntoTragaperrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConjuntoTragaperrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConjuntoTragaperrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
