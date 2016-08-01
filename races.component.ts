import { Component } from '@angular/core';
@Component({
    selector: 'ns-races',
    template: `
<h2>Races</h2>
<button (click)="refreshRaces()">Refresh the races list</button> 
<p>{{races.length}} races</p> 

<input type="text" #name>
<button (click)="name.focus()">Focus the input</button>

`
})
export class RacesComponent {
    races: any = [];
    refreshRaces() {
        this.races = [{ name: 'London' }, { name: 'Lyon' }];
    }
}
