import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranSelectionPersonnageComponent } from './ecran-selection-personnage.component';

describe('EcranSelectionPersonnageComponent', () => {
  let component: EcranSelectionPersonnageComponent;
  let fixture: ComponentFixture<EcranSelectionPersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcranSelectionPersonnageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcranSelectionPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
