import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { GetPokemonComponent } from './get-pokemon/get-pokemon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowPokemonComponent } from './show-pokemon/show-pokemon.component';



@NgModule({
  declarations: [
    NavbarComponent,
    AddPokemonComponent,
    ShowPokemonComponent,
    GetPokemonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    AddPokemonComponent,
    ShowPokemonComponent,
    GetPokemonComponent
  ]
})
export class ComponentsModule { }
