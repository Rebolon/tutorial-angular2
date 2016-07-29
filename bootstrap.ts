import {bootstrap} from '@angular/platform-browser-dynamic';
import {PonyRacerAppComponent} from './ponyracer-app.component';

bootstrap(PonyRacerAppComponent)
  .catch(err => console.log(err)); // useful to catch the errors
