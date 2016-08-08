import {bootstrap} from '@angular/platform-browser-dynamic';
import {PonyRacerAppComponent} from './ponyracer-app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {RaceService} from './race.service';
import {FakeRaceService} from './fake.race.service';

function playWithInjector(inj) {
    console.log("inj.get(RaceService)", inj.get(RaceService));
// logs "RaceService {http: Http}"
    console.log("inj.get(RaceService) === inj.get(RaceService)", inj.get(RaceService) === inj.get(RaceService));
// logs "true", as the same instance is returned every time for a token
}

bootstrap(PonyRacerAppComponent, [
    HTTP_PROVIDERS,
    { provide: RaceService, useClass: FakeRaceService }
]).then(
    // and play with the returned injector
    appRef => playWithInjector(appRef.injector)
).catch(err => console.error(err)); // useful to catch the errors
