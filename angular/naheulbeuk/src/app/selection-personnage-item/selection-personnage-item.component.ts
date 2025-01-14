import { Component } from '@angular/core';

@Component({
  selector: 'app-selection-personnage-item',
  imports: [],
  templateUrl: './selection-personnage-item.component.html',
  styleUrl: './selection-personnage-item.component.css',
  standalone: true
})
export class SelectionPersonnageItemComponent {
  id!: number;
  nom!: string;
  origine!: string;
  metier!: string;
  niveau!: number;
  image!: string;

  ngOnInit() {
    this.id = 1;
    this.nom = 'Merlin';
    this.origine = 'Humain';
    this.metier = 'Archimage';
    this.niveau = 5;
    this.image = 'https://as1.ftcdn.net/v2/jpg/06/47/52/28/1000_F_647522820_uvTnpvtnmEXc1s1HQh5J3AZXC9Oywz5O.jpg';
  }
}
