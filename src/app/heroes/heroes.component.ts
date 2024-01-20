import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService){

  }
ngOnInit(): void {
    this.heroes = this.heroService.getHeroes()
}

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
