import {bootstrap} from '@angular/platform-browser-dynamic';
import {PonyRacerAppComponent} from './ponyracer-app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {RaceService} from './race.service';

bootstrap(PonyRacerAppComponent, [HTTP_PROVIDERS, RaceService])
  .catch(err => console.log(err)); // useful to catch the errors
