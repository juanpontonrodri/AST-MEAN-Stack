import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showmessage = false;
  success = false
  failure = false
  title = 'frontend';
  showPokemonVisible = false

  constructor(private PokemonService: PokemonService) {

  }


  onrstatus(success: boolean) {
    this.showmessage = true;
    this.success = success;
    this.failure = !success;
  }

  cancelmessage() {

    this.success = false;
    this.failure = false;
    this.showmessage = false;
    this.showPokemonVisible = false

  }
  activarShowPokemons() {
    if (this.showPokemonVisible == false) {
      this.showPokemonVisible = true
    } else this.showPokemonVisible = false;
  }

  desactivarMostrar(){
    this.showPokemonVisible=false;
  }

}

