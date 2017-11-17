import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html'
})
export class FiltroComponent implements OnInit {

  private heroes:any[] = [];
  private termino:string;

  constructor( private _activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService,
               private _router:Router ) {
  }

  ngOnInit() {

    this._activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      console.log( params['termino'] );
      this.heroes = this._heroesService.buscarHeroe( params['termino'] );
      console.log(this.heroes);
    });

  }

  verHeroe( idx:number ){
    this._router.navigate( ['/heroe', idx] );
  }

}
