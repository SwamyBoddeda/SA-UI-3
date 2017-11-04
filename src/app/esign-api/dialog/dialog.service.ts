import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DialogComponent } from './dialog.component';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class DialogService {
    private esignAPIUrl;
    constructor(private http: HttpClient, private route: ActivatedRoute) { 
            this.esignAPIUrl = environment.esignAPIUrl;
        }
    
    getChallenges(guid, lineOfBusiness, appName) {
        sessionStorage.setItem("guid", guid);
        const url = "http://localhost:3000/challenges";
     //   const url = `${this.esignAPIUrl}/${guid}/questions`;
     //   const headers = new HttpHeaders().append('LOB', lineOfBusiness)
     //   .append('applicationName', appName)

        return this.http.get(url);
     }

    submitChallenges(challengeResponse){
        //const url = "http://localhost:3000/challenges";
        let guid_value = sessionStorage.getItem("guid");
        const url = `${this.esignAPIUrl}/${guid_value}/authenticate`;

        return this.http.post(url, challengeResponse);
    }
}