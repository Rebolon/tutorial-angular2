import {Component} from '@angular/core';

@Component({
    selector: 'ponyracer-app',  
    template: `
        <h1>PonyRacer</h1>
        <h2>Welcome {{ user.name }}</h2>
        <h2>{{ numberOfUsers }} users</h2>
    `
})
export class PonyRacerAppComponent {
    numberOfUsers: number = 146;

    user: any = { name: 'Cédric' };
}
