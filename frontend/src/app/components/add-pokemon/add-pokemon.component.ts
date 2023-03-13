import { Component, OnInit } from '@angular/core';
import Pokemon from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent {

  showformflag = false
  tipoPokemon: string[] = [];

  constructor(private PokemonService: PokemonService) {

  }
  ngOnInit(): void { }



  showform() {
    if (this.showformflag == false) {
      this.showformflag = true;
    } else this.showformflag = false
  }
  cancelform() {
    this.showformflag = false;
  }
  addPokemon(nombre: string, numero: number, generacion: number, region: string, tipo: string, evolucion: boolean, legendario: boolean, cantidad: number, precio: number) {
    this.showformflag = false;
    this.PokemonService.createPokemon(nombre, numero, generacion, region, tipo, evolucion, legendario, cantidad, precio)
      .subscribe(() => { this.ngOnInit() });
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
