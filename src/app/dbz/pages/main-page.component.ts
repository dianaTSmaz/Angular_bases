
import { Component } from '@angular/core';
import { Character } from '../interfaces/Character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dragonballz-main-page',
    templateUrl: 'main-page.component.html'
})

//Es como una clase normal , por lo tanto, es posible agregar propiedades y métodos
export class MainPageComponent {
    
    constructor(private  dbzService : DbzService){}

       get Characters() : Character[]
       {
         return [...this.dbzService.Characters];
       }
       
     
       onDeleteCharacter(id: string) : void 
       {
         this.dbzService.deleteCharacterById(id);
       }

       onNewCharacter(character: Character) : void {
        this.dbzService.addCharacter(character);
       }
    }
