import { Component } from '@angular/core';
@Component({
    selector: 'ns-races',
    template: `
<div *ngIf="races.length > 0">
<h2>{{races.length}} Races</h2>
<ul>
<li *ngFor="let race of races; let i=index">{{ i }} - {{race.name}}</li>
</ul>
</div>
<button (click)="refreshRaces()">Refresh the races list</button> 
<br />
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
