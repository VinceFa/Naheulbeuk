import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectionPersonnageComponent } from './selection-personnage/selection-personnage.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SelectionPersonnageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'naheulbeuk';
}
