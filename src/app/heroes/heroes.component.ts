import { Component, OnInit } from '@angular/core';
import {Hero} from '../Heros'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

//hero = Heros mock
heroes: Hero[] = [];

// The parameter simultaneously defines a private heroService 
// property and identifies it as a HeroService injection site.
constructor(private heroService: HeroService, private messageService: MessageService) { }

hero: Hero = {
  id: 1,
  name: 'Windstorm',
} 
// Create a method to retrieve the heroes from the service.
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
ngOnInit(): void {
  this.getHeroes();
}

}
