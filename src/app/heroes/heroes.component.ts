import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {

  //hero : Hero = {
   //id : 1,
  //  name : 'Windstorm'
  //};

  // heroes property used to diplay list of heros
  heroes: Hero[] = [];

  // used for the hero selected.
  //selectedHero?: Hero;

  constructor(private heroSerivce: HeroService){ }

  ngOnInit(): void {
    this.getHeroes();
  }

  //_______________________________________________________________
 // Synchronous
 // getHeroes(): void {
 //  this.heroes = this.heroSerivce.getHeroes();
 // }

  // Asychronous
  getHeroes(): void {
    this.heroSerivce.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
}
  //_______________________________________________________________


  // onSelect(hero: Hero): void
  //{
  //  this.selectedHero = hero;
  //  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
 // }

 add(name: string): void{
   name = name.trim();
   if (!name) { return; }
   this.heroSerivce.addHero({ name } as Hero)
   .subscribe(hero => {
     this.heroes.push(hero);
   });
 }

 delete(hero: Hero): void{
   this.heroes = this.heroes.filter(h => h !== hero);
   this.heroSerivce.deleteHero(hero.id).subscribe();
 }
 
}
