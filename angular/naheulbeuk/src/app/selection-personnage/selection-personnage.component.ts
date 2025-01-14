import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import { SelectionPersonnageItemComponent } from '@app/selection-personnage-item/selection-personnage-item.component';

@Component({
  selector: 'app-selection-personnage',
  imports: [MatSlideToggleModule, MatProgressSpinnerModule, MatButtonModule, SelectionPersonnageItemComponent],
  templateUrl: './selection-personnage.component.html',
  styleUrl: './selection-personnage.component.css'
})
export class SelectionPersonnageComponent {

}
