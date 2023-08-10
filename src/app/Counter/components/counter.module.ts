import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";

@NgModule({
    declarations:[
        CounterComponent
    ],

    //Es necesario exportarlo para poder usar el counterComponent en app
    exports : [
        CounterComponent
    ]
})

export class CounterModule{}
