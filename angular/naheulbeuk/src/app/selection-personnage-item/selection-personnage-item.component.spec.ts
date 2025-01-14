import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionPersonnageItemComponent } from './selection-personnage-item.component';

describe('SelectionPersonnageItemComponent', () => {
  let component: SelectionPersonnageItemComponent;
  let fixture: ComponentFixture<SelectionPersonnageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionPersonnageItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionPersonnageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
