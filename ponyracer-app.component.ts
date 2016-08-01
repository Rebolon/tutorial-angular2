import {Component} from '@angular/core';

// do not forget to import the component
import { RacesComponent } from './races.component';
import {PoniesComponent} from "./ponies.component";

@Component({
    selector: 'ponyracer-app',  
    template: `
        <h1>PonyRacer</h1>
        <ns-races (newRaceAvailable)="onNewRace()"></ns-races>
        <ns-ponies></ns-ponies>
    `,

    // declare all the components you use in your template
    directives: [RacesComponent, PoniesComponent]
})
export class PonyRacerAppComponent {
    onNewRace() {
        // add a flashy message for the user.
    }
}
