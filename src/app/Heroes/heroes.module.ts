import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
   
    exports: [
        HeroComponent,
        ListComponent
    ],
    //En declarations se colocan los componentes que se van a agregar al modulo
    declarations: [
        HeroComponent,
        ListComponent
    ],
    imports: [
        //Es importante importarlo porque esto nos permite usar funciones de directivas generales
        //Sino fuera por este modulo no me fuera posible ver los botones correspondientes a hero
        CommonModule,
    ],
})

export class HeroesModule { }

