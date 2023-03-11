import { Component, OnInit } from '@angular/core';
import Pokemon from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-show-pokemon',
  templateUrl: './show-pokemon.component.html',
  styleUrls: ['./show-pokemon.component.css']
})
export class ShowPokemonComponent implements OnInit {

  pokemons: Pokemon[] = [];
  url1: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
  url2: string = ".png";

  constructor(private PokemonService: PokemonService) {

  }
  ngOnInit() {
    this.PokemonService.getPokemons()
      .subscribe((pokemons: any) => this.pokemons = pokemons);
  }
  deletePokemon(pokemon: Pokemon) {
    this.PokemonService.deletePokemon(pokemon._id).subscribe(() => { this.ngOnInit() });
  }
}
