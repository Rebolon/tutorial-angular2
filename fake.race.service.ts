import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class FakeRaceService {

    list() {
        return Observable.of([{ name: 'London' }]);
    }

}
