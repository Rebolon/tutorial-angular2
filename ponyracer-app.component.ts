import {Component} from '@angular/core';

// do not forget to import the component
import { RacesComponent } from './races.component';

@Component({
    selector: 'ponyracer-app',  
    template: `
        <h1>PonyRacer</h1>
        <ns-races></ns-races>
    `,

    // declare all the components you use in your template
    directives: [RacesComponent]
})
export class PonyRacerAppComponent {

}
