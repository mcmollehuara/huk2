import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {
    constructor(public http: Http) {

    }

    public getComponents(): Promise<any> {
        let url = "/assets/mock-data/mock-data.json";
        return this.http.get(url).map(resp => {
            return resp.json();
        }).toPromise();
    }
}