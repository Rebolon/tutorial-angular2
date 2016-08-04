import {Component} from '@angular/core';

// do not forget to import the component
import { RaceService } from './race.service';

@Component({
    selector: 'ponyracer-app',  
    template: `
        <h1>PonyRacer</h1>
        <p>{{list()}}</p>
    `
})
export class PonyRacerAppComponent {

    constructor(private raceService: RaceService) {

    }

    list() {
        return this.raceService.list();
    }
}
