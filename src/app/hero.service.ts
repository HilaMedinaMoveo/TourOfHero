import { Injectable } from '@angular/core';
import { Hero } from './Heros';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  // The @Injectable() decorator accepts a metadata object for the service, 
  // the same way the @Component() decorator did for your component classes.
  providedIn: 'root'
  
})
export class HeroService {
  
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  constructor(private messageService: MessageService) { }
}
