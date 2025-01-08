import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionPersonnageComponent } from './selection-personnage.component';

describe('SelectionPersonnageComponent', () => {
  let component: SelectionPersonnageComponent;
  let fixture: ComponentFixture<SelectionPersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionPersonnageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
