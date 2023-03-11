import { Injectable } from '@angular/core';
import { response } from 'express';
import { map } from 'rxjs';
import Pokemon from '../models/pokemon';
import { WebService } from './webservice.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private webService: WebService) { }


  getPokemons() {
    return this.webService.get('api/pokemon');
  }
  getPokemonByID(_id: string) {
    return this.webService.get('api/pokemon/id/${_id}')
  }
  getPokemonByName(_name: string) {
    return this.webService.get('api/pokemon/name/${_name}')
  }
  createPokemon(nombre: String, numero: Number, generacion: Number, region: string, tipo: [string, string], evolucion: boolean, legendario: boolean, cantidad: number, precio: number) {

    return this.webService.post('api/pokemon', { nombre, numero, generacion, region, tipo, evolucion, legendario, cantidad, precio })
  }
  deletePokemon(_id: string) {
    return this.webService.delete(`api/pokemon/id/${_id}`);
  }

}
