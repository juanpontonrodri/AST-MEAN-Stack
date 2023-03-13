import { Component } from '@angular/core';
import Pokemon from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-modify-pokemon',
  templateUrl: './modify-pokemon.component.html',
  styleUrls: ['./modify-pokemon.component.css']
})
export class ModifyPokemonComponent {

  constructor(private PokemonService: PokemonService) {

  }

  pokemonSeleccionado!: Pokemon;
  showmodifyflag = false
  rest = true
  success = false
  failure = false

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
