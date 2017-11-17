import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Heroe } from '../../../interfaces/heroe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private _router:Router ){
  }

  ngOnInit() {
  }

  buscarHeroe( termino:string ){
    this.heroes = this._heroesService.buscarHeroe(termino);
    console.log(termino);
    this._router.navigate( ['/filtro', termino] );
  }

}
