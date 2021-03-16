import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoanScheduleRow } from '../models/loan-schedule-row.model';
import { Loan } from '../models/loan.model';

@Injectable()
export class LoanService {

    constructor(private readonly http: HttpClient) { }

    public async getLoanSchedule(loan: Loan): Promise<LoanScheduleRow[]> {
        return await this.http.post<LoanScheduleRow[]>(environment.urls.api + 'test', loan).toPromise();
    }


}