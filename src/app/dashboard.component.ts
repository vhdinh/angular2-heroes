
import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.css'
  ]
})

export class DashboardComponent implements OnInit {
  topHeroes: Hero[] = [];
  bottomHeroes: Hero[] = [];

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.topHeroes = heroes.slice(1, 5));
    this.heroService.getHeroes().then(heroes => this.bottomHeroes = heroes.slice(Math.max(heroes.length - 4, 1)));

  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

  onBottomHeroDrop(evt: any) {
    this.bottomHeroes.push(evt.dragData);
    let heroToRemoveIndex = this.topHeroes.indexOf(evt.dragData);
    this.topHeroes.splice(heroToRemoveIndex, 1)
  }

  onTopHeroDrop(evt: any) {
    this.topHeroes.push(evt.dragData)
    let heroToRemoveIndex = this.bottomHeroes.indexOf(evt.dragData);
    this.bottomHeroes.splice(heroToRemoveIndex, 1)
  }
}
