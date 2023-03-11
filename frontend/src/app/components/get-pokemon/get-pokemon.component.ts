import { Component, OnInit } from '@angular/core';
import Pokemon from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-get-pokemon',
  templateUrl: './get-pokemon.component.html',
  styleUrls: ['./get-pokemon.component.css']
})

export class GetPokemonComponent implements OnInit {

  showformflag = false

  constructor(private PokemonService: PokemonService) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getByName(name: string) {
    this.showformflag = false;
    this.PokemonService.getPokemonByName(name).subscribe(() => { });
  }
  getByID(id: string) {
    this.showformflag = false;
    this.PokemonService.getPokemonByName(id).subscribe(() => { });
  }


  showform() {
    if (this.showformflag == false) {
      this.showformflag = true;
    } else this.showformflag = false
  }
}
