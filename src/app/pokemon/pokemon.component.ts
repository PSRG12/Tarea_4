import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {

  @Input()  //Dato de entrada
  x: number;

  @Input()
  y: number;
  
  ngOnInit() {}
  poke = [
    {     
      numero:1,
      nombre: "Bulbasaur",
      imagen:'assets/bulbasaur.png',
      tipo1:'assets/tipos/grass.jpg',
      tipo2:'assets/tipos/poison.jpg',
      cantidad:2
    },
    {     
      numero:2,
      nombre: "Ivysaur",
      imagen:'assets/ivysaur.png',
      tipo1:'assets/tipos/grass.jpg',
      tipo2:'assets/tipos/poison.jpg',
      cantidad:2
    },
    {     
      numero:3,
      nombre: "Venusaur",
      imagen:'assets/venusaur.png',
      tipo1:'assets/tipos/grass.jpg',
      tipo2:'assets/tipos/poison.jpg',
      cantidad:2
    },
    {     
      numero:4,
      nombre: "Charmander",
      imagen:'assets/charmander.png',
      tipo1:'assets/tipos/fire.jpg',      
      cantidad:1
    },
    {
      numero:5,
      nombre: "Charmeleon",
      imagen:'assets/charmeleon.png',
      tipo1:'assets/tipos/fire.jpg',
      cantidad:1,
    },
    {
      numero:6,
      nombre:"Charizard",
      imagen:'assets/charizard.png',
      tipo1:'assets/tipos/fire.jpg',
      tipo2:'assets/tipos/flying.jpg',
      cantidad:2,

    },
    {     
      numero:7,
      nombre: "Squirtle",
      imagen:'assets/squirtle.png',
      tipo1:'assets/tipos/water.jpg',      
      cantidad:1
    },
    {
      numero:8,
      nombre: "Wartortle",
      imagen:'assets/wartortle.png',
      tipo1:'assets/tipos/water.jpg',      
      cantidad:1
    },
    {
      numero:9,
      nombre:"Blastoise",
      imagen:'assets/blastoise.png',
      tipo1:'assets/tipos/water.jpg',      
      cantidad:1
    },
    {
      numero:10,
      nombre:"Caterpie",
      imagen:'assets/caterpie.png',
      tipo1:'assets/tipos/bug.jpg',      
      cantidad:1
    },
    {
      numero:11,
      nombre:"Metapod",
      imagen:'assets/metapod.png',
      tipo1:'assets/tipos/bug.jpg',      
      cantidad:1
    },
    {
      numero:12,
      nombre:"Butterfree",
      imagen:'assets/butterfree.png',
      tipo1:'assets/tipos/bug.jpg',
      tipo2:'assets/tipos/flying.jpg',      
      cantidad:2,
    },
    {
      numero:13,
      nombre:"Weedle",
      imagen:'assets/weedle.png',
      tipo1:'assets/tipos/bug.jpg',
      tipo2:'assets/tipos/poison.jpg',      
      cantidad:2,

    },
    {
      numero:14,
      nombre:"Kakuna",
      imagen:'assets/kakuna.png',
      tipo1:'assets/tipos/bug.jpg',
      tipo2:'assets/tipos/poison.jpg',      
      cantidad:2,
    },
    {
      numero:15,
      nombre:"Beedrill",
      imagen:'assets/beedrill.png',
      tipo1:'assets/tipos/bug.jpg',
      tipo2:'assets/tipos/poison.jpg',      
      cantidad:2,
    },
    {
      numero:16,
      nombre:"Pidgey",
      imagen:'assets/pidgey.png',
      tipo1:'assets/tipos/normal.jpg',
      tipo2:'assets/tipos/flying.jpg',      
      cantidad:2,
    },
    {
      numero:17,
      nombre:"Pidgeotto",
      imagen:'assets/pidgeotto.png',
      tipo1:'assets/tipos/normal.jpg',
      tipo2:'assets/tipos/flying.jpg',      
      cantidad:2,
    },
    {
      numero:18,
      nombre:"Pidgeot",
      imagen:'assets/pidgeot.png',
      tipo1:'assets/tipos/normal.jpg',
      tipo2:'assets/tipos/flying.jpg',      
      cantidad:2,
    },
    {
      numero:19,
      nombre:"Ratata",
      imagen:'assets/rattata.png',
      tipo1:'assets/tipos/normal.jpg',      
      cantidad:1

    },
    {
      numero:20,
      nombre:"Raticate",
      imagen:'assets/raticate.png',
      tipo1:'assets/tipos/normal.jpg',      
      cantidad:1
    },
    {
      numero:21,
      nombre:"Spearow",
      imagen:'assets/spearow.png',
      tipo1:'assets/tipos/normal.jpg',
      tipo2:'assets/tipos/flying.jpg',      
      cantidad:2,
    },
    {
      numero:22,
      nombre:"Fearow",
      imagen:'assets/fearow.png',
      tipo1:'assets/tipos/normal.jpg',
      tipo2:'assets/tipos/flying.jpg',      
      cantidad:2,
    },
    {
      numero:23,
      nombre:"Ekans",
      imagen:'assets/ekans.png',
      tipo1:'assets/tipos/poison.jpg',      
      cantidad:1
    },
    {
      numero:24,
      nombre:"Arbok",
      imagen:'assets/arbok.png',
      tipo1:'assets/tipos/poison.jpg',      
      cantidad:1
    },
    {
      numero:25,
      nombre:"Pikachu",
      imagen:'assets/pikachu.png',
      tipo1:'assets/tipos/electrico.jpg',      
      cantidad:1
    },
    {
      numero:26,
      nombre:"Raichu",
      imagen:'assets/raichu.png',
      tipo1:'assets/tipos/electrico.jpg',      
      cantidad:1,
    }
  

    
  ]
}
