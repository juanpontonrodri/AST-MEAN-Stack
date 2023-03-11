import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  showPokemonVisible = false

  activarShowPokemons() {
    if (this.showPokemonVisible == false) {
      this.showPokemonVisible = true
    } else this.showPokemonVisible = false;
  }

}

