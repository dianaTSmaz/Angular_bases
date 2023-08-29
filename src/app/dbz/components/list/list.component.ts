import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

   //Se agrega el decorador Input para especificar que esta propiedad recibira 
 //informacion del componente padre.
 @Input()
 public characterList: Character[] = [
  {name: 'Trunks',
   power:10}
 ]


   //Create an event to emit or delete the characterId
 //onDelete = index:number
 @Output()
 public OnDelete: EventEmitter<string> = new EventEmitter();


 //Method to delete a character
 OnDeleteCharacter(id? : string):void{
  
  if(!id) return;
  
    debugger;
    //Emitir el evento cuando se dispare el metodo
  this.OnDelete.emit(id);

  //this.OnDelete.emit(index);

  //todo: emit the character id 
  //console.log(index);

 }

}
