import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectionPersonnageComponent } from '@app/selection-personnage/selection-personnage.component';
import { SelectionPersonnageItemComponent } from '@app/selection-personnage-item/selection-personnage-item.component';

@Component({
  selector: 'app-root',
  imports: [SelectionPersonnageComponent, SelectionPersonnageItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'naheulbeuk';
}
