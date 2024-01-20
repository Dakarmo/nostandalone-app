import { Component, Input} from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  // ! : Opérateur de confiance
  // ? :
  @Input() hero?: Hero
}
