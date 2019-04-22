import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  getPokemon(){
    let jigglypuff = this._http.get<PokeData>('https://pokeapi.co/api/v2/pokemon/jigglypuff');

    jigglypuff.subscribe(data => {
      console.log("Got the pokemon!", data);
      for(const item of data.abilities){
        let ability = this._http.get<AbilityData>(item.ability.url);
        ability.subscribe(data => {
          console.log(data.pokemon.length);
        })
        let pokemonWithAbility = 0;
        console.log(item.ability.name);
      }
      
    }
    ); 
  }

  constructor(private _http: HttpClient) {
    this.getPokemon();
   }
}

interface PokeData {
  abilities: Array<Ability>
}

interface Ability {
  ability: {
    name: string,
    url: string
  } 
}

interface AbilityData {
  pokemon: Array<Pokemon>
}

interface Pokemon {
  pokemon: {
    name: string
  }
}
