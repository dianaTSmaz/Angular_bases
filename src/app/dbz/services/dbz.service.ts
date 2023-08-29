
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Character.interface';
import {v4 as uuid} from 'uuid';
import { getLocaleDateTimeFormat } from '@angular/common';

//Injectable significa que esta clase sera tratada como un servicio
@Injectable({providedIn: 'root'})
export class DbzService {
   
    public Characters : Character[] = [{
        id: uuid(),
        name:'Goku',
        power:10000
    },
    {
     id: uuid(),
     name:'Krillin',
     power:1000},
     {
        id: uuid(),
        name:'Vegeta',
        power:7500
     }
    ] ; 

    addCharacter(character:Character):void{

        //Crear un nuevo objeto agregandole el id generado por uuid
        // ...=spread y sirve para esparcir en el objeto creado las propiedades de la clase
        
        debugger;
        const newCharacter : Character = {
               id :  uuid(),
               ...character
        };

        console.log('Main Page');
        console.log(newCharacter);
        
        this.Characters.push(newCharacter);

    }

    deleteCharacterById(id : string):void{

        console.log('Delete main page:')
        //splice method : https://www.educative.io/answers/how-to-use-splice-in-angular
        //this.Characters.splice(index,1);
        //filter method : get a subarray of an array with the elements that match
        this.Characters = this.Characters.filter(character => character.id !== id );
    }

    
}