import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
 import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-selection-personnage',
  imports: [MatSlideToggleModule, MatProgressSpinnerModule, MatButtonModule],
  templateUrl: './selection-personnage.component.html',
  styleUrl: './selection-personnage.component.css'
})
export class SelectionPersonnageComponent {

}
