
import { Component, Input, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { LoanService } from "src/app/services/loan.service";
import { Loan } from '../../../../../models/loan.model';

@Component({
  selector: 'app-house-loan',
  templateUrl: './house-loan.component.html',
  styleUrls: ['./house-loan.component.scss']
})
export class HouseLoanComponent implements OnInit {
  public loan = new Loan();
  chartData: ChartDataSets[] = [{ data: [0, 0], backgroundColor: ['#c6dff5', '#060144'] }];
  chartLabels: Label[] = ['Principal Amount', 'Interest amount'];
  chartOptionsLables = { legend: { position: 'bottom' } };
  chartLegend = true;
  loading = false;
  chartType = 'pie';

  constructor(
    private readonly loanService: LoanService
  ) { }

  ngOnInit(): void {
    this.loan.interestRate = 3.5;
  }

  formatLabel(value: number): string {
    if (value >= 1000 && value <= 999999) {
      return Math.round(value / 1000) + 'k';
    } else if (value >= 1000000) {
      return (Math.round(value) / 1000000).toFixed(1) + 'm';
    }
    return value.toString();
  }

  calculateLoan(): void {
    if (this.loan.loanAmount && this.loan.interestRate && this.loan.loanYears) {
      // compute the monthly payment figure
      const rate = Math.pow(1 + (this.loan.interestRate / 100), this.loan.loanYears); // rate between years and interest
      this.loan.yearRate = (this.loan.loanAmount * rate * (this.loan.interestRate / 100)) / (rate - 1);
      if (isFinite(this.loan.yearRate)) { // if user is nice and put correct data
        this.loan.total = this.loan.yearRate * this.loan.loanYears;
        this.loan.interest = ((this.loan.yearRate * this.loan.loanYears) - this.loan.loanAmount);
      }
    }
    this.updateChart();
  }

  async createLoanSchedule(): Promise<void> {
    this.loading = true;
    const loanSchedule = await this.loanService.getLoanSchedule(this.loan);
    this.loading = false;
  }
  updateChart(): void {
    this.chartData[0].data = [this.round(this.loan.loanAmount), this.round(this.loan.interest)];
  }

  round = (num: number): number => Math.round((num + Number.EPSILON) * 100) / 100;
}

