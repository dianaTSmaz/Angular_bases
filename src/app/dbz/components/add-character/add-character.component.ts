import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent  {

  //Se especifica que este sera un uotput
  @Output()

  //Instruccion para pasar informacion del hijo al padre(output)
  //EventEmitter --> pertenece a un tipo de emisor de net/core EventEmitter<T>
  public OnNewCharacter: EventEmitter<Character> = new EventEmitter();

      public character : Character = {
      name : '',
      power: 0
    }
   
    emitCharacter(): void{
      console.log(this.character);

      if(this.character.name.length === 0) return;

      this.OnNewCharacter.emit(this.character);

      this.character = {name : '',power : 0};
    }
}
