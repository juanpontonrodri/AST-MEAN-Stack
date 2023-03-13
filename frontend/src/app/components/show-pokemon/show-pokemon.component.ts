import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Pokemon from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-show-pokemon',
  templateUrl: './show-pokemon.component.html',
  styleUrls: ['./show-pokemon.component.css']
})
export class ShowPokemonComponent implements OnInit {
  pokemonSeleccionado!: Pokemon
  modificando = false
  showmodifyflag = false
  rest = true
  success = false
  failure = false
  pokemons: Pokemon[] = [];
  url1: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
  url2: string = ".png";

  constructor(private PokemonService: PokemonService) {

  }
  ngOnInit() {
    this.PokemonService.getPokemons()
      .subscribe((pokemons: any) => this.pokemons = pokemons);
  }

  @Output() rstatus = new EventEmitter<boolean>();

  deletePokemon(pokemon: Pokemon) {
    this.PokemonService.deletePokemon(pokemon._id)
      .subscribe(response => {
        if (response.status == 200) {
          console.log("deleted true")
          this.rstatus.emit(true);
        } else {
          console.log("deleted true")
          this.rstatus.emit(false);
        }
      });
  }

  modify(pokemon: Pokemon) {
    this.pokemonSeleccionado = pokemon;
    this.showmodifyflag = true;
    this.rest = false;
  }


  modifyPokemon(_id: string, nombre: string, numero: number, generacion: number, region: string, tipo: string, evolucion: boolean, legendario: boolean, cantidad: number, precio: number) {
    this.showmodifyflag = false;
    this.rest = true;
    this.PokemonService.putPokemon(_id, nombre, numero, generacion, region, tipo, evolucion, legendario, cantidad, precio)
      .subscribe(response => {
        this.rest = false;

        // You can access status:
        if (response.status == 200) {
          this.success = true;
        }
        else {
          this.failure = true;
        }

      });
  }
  cancelmodify() {
    this.showmodifyflag = false;
    this.rest = true;
  }
  getBoolean(value: string) {
    switch (value) {
      case "true":
        return true;
      default:
        return false;
    }

  }
}
