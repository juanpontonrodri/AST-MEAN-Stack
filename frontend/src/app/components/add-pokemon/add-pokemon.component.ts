import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  numero: number | undefined

  constructor(private PokemonService: PokemonService) {

  }
  ngOnInit(): void { }

  @Output() rstatus = new EventEmitter<boolean>();


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
      .subscribe(response => {
        if (response.status == 200) {
          console.log("dadded true")
          this.rstatus.emit(true);
        } else {
          console.log("added true")
          this.rstatus.emit(false);
        }
      });
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
