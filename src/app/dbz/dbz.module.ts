import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Se importa el componente que corresponde al modulo
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({

  //En declarations se coloca el componente que corresponde al modulo
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    //Se exporta el componenete que consumira al modulo
    //Todos los demas componentes del modulo se encontrarán en el MainPageComponent
    MainPageComponent
  ]
})
export class DbzModule { }
