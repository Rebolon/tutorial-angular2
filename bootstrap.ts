import {bootstrap} from '@angular/platform-browser-dynamic';
import {PonyRacerAppComponent} from './ponyracer-app.component';
import {HTTP_PROVIDERS, Http} from '@angular/http';
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
    { provide: 'IS_PROD', useValue: true },
    { provide: RaceService,
      useFactory: (IS_PROD, http) =>  IS_PROD ? new RaceService(http) : new FakeRaceService(),
      // array with the dependencies needed (for RceService here)
      deps: ['IS_PROD', Http]
    }
]).then(
    appRef => playWithInjector(appRef.injector)
).catch(err => console.error(err)); // useful to catch the errors
