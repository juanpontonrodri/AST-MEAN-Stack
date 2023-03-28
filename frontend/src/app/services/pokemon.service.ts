import { Injectable } from '@angular/core';
import { response } from 'express';
import Pokemon from '../models/pokemon';
import { WebService } from './webservice.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public rest = true
  public success = false
  public failure = false
  constructor(private webService: WebService) { }


  getPokemons() {
    return this.webService.get(`api/pokemon`);
  }

  getPokemonByID(_id: string) {
    return this.webService.get(`api/pokemon/id/${_id}`)
  }
  getPokemonByName(_name: string) {
    return this.webService.get(`api/pokemon/nombre/${_name}`)
  }
  getPokemonByPrice(_price: number) {
    return this.webService.get(`api/pokemon/precio/${_price}`)
  }
  createPokemon(nombre: String, numero: Number, generacion: Number, region: string, tipo: string, evolucion: boolean, legendario: boolean, cantidad: number, precio: number) {

    return this.webService.post(`api/pokemon`, { nombre, numero, generacion, region, tipo, evolucion, legendario, cantidad, precio })
  }
  deletePokemon(_id: string) {
    return this.webService.delete(`api/pokemon/id/${_id}`);
  }
  putPokemon(_id: string, nombre: String, numero: Number, generacion: Number, region: string, tipo: string, evolucion: boolean, legendario: boolean, cantidad: number, precio: number) {
    return this.webService.put(`api/pokemon/id/${_id}`, { _id, nombre, numero, generacion, region, tipo, evolucion, legendario, cantidad, precio })
  }
}
