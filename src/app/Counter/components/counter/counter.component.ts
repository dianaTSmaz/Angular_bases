import { Component} from '@angular/core';


@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter : {{ counter }}</h3>
    <!--Se agrega un evento click al boton-->
    <button (click)="increaseBy(+1)">+1</button>
    <button (click) = "resetButton()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
     
    `
})

export class CounterComponent {
    constructor() { }

    //Implements the methods that are going to be used in the counter
    public title : string = 'Hola Mundo contador';

    public counter: number = 10;
  
    //Creacion del metodo para incrementar cuando se presione el boton
    /*increaseBy() : void {
      //this.counter = this.counter + 1;
      this.counter += 1;
    }*/
  
    /*decreaseBy() : void
    {
      this.counter = this.counter - 1; 
    }*/
  
    //Optimizacion del codigo. En una sola función es posible hacer la suma y la resta
    increaseBy(value : number) : void{
         this.counter  += value; 
    } 
  
    //Funcion de reset
    resetButton() : void 
    {
      this.counter = 10;
    }
}