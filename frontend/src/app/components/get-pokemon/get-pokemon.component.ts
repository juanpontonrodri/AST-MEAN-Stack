import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Pokemon from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-get-pokemon',
  templateUrl: './get-pokemon.component.html',
  styleUrls: ['./get-pokemon.component.css']
})

export class GetPokemonComponent implements OnInit {

  showresults = false
  showformflag = false
  pokemons: Pokemon[] = [];
  pokemonsolo!: Pokemon
  pokemonSeleccionado!: Pokemon
  showmodifyflag = false
  url1: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
  url2: string = ".png";
  constructor(private PokemonService: PokemonService) {

  }
  ngOnInit(): void {
    this.pokemons=[]
    this.showresults = false
  }

  getByName(name: string) {
    this.pokemons=[]
    this.showformflag = false;
    this.showresults = true;
    this.PokemonService.getPokemonByName(name).subscribe((response: any) => {
      if (Array.isArray(response)) {
        this.pokemons = response; // La respuesta es un arreglo de Pokemon
      } else {
        this.pokemons = [response]; // La respuesta es un solo Pokemon
      }
    });
  }


  getByID(id: string) {
    this.pokemons=[]
    this.showformflag = false;
    this.showresults = true;
    this.PokemonService.getPokemonByID(id).subscribe((response: any) => {
      this.pokemons = [response];
    });
  }


  showform() {
    this.pokemons=[]//testearlo
    if (this.showformflag == false) {
      this.showresults = false
      this.showformflag = true;
    } else this.showformflag = false
  }

  @Output() rstatus = new EventEmitter<boolean>();

  deletePokemon(pokemon: Pokemon) {
    this.showresults = false
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
    this.showresults = false

  }


  modifyPokemon(_id: string, nombre: string, numero: number, generacion: number, region: string, tipo: string, evolucion: boolean, legendario: boolean, cantidad: number, precio: number) {
    this.showmodifyflag = false;
    this.showresults = false
    this.PokemonService.putPokemon(_id, nombre, numero, generacion, region, tipo, evolucion, legendario, cantidad, precio)
      .subscribe(response => {
        if (response.status == 200) {
          console.log("event true")
          this.rstatus.emit(true);
        } else {
          console.log("event true")
          this.rstatus.emit(false);
        }
      });
  }
  cancelmodify() {
    this.showmodifyflag = false;
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
