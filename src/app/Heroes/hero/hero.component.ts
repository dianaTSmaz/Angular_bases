import { Component} from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent  {

  constructor() { }

  public name : string = "Aquaman";
  public age : number = 29;

  //Los metodos getters y setters se usan como propiedades
  //solamente que se mandan a llamar con parentesis
  get CapitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string
  {
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = "Spiderman";
  }

  changeAge():void{
    this.age = 33;
  }

  reset():void{
    this.age =  29;
    this.name = 'Aquaman';

    //Angular no esta pendiente de la deteccion de los cambios de los componentes
    //usando JS
    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML='<h1>Desde Angular usando JS</h1>'
    })
  }
}
