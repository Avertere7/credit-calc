
import { Component, Input } from "@angular/core";
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-house-loan',
  templateUrl: './house-loan.component.html',
  styleUrls: ['./house-loan.component.scss']
})
export class HouseLoanComponent {
  public loanAmount = 0;
  public loanYears = 1;
  public total;
  public interest;
  public interestRate = 3.5;
  chartData: ChartDataSets[] = [{ data: [0, 0], backgroundColor: ['#c6dff5', '#060144'] }];
  chartLabels: Label[] = ['Principal Amount', 'Interest amount'];
  chartOptionsLables = { legend: { position: 'bottom' } };
  chartLegend = true;
  chartType = 'pie';

  formatLabel(value: number): string {
    if (value >= 1000 && value <= 999999) {
      return Math.round(value / 1000) + 'k';
    } else if (value >= 1000000) {
      return (Math.round(value) / 1000000).toFixed(1) + 'm';
    }
    return value.toString();
  }

  calculateLoan(): void {
    if (this.loanAmount && this.interestRate && this.loanYears) {
      // compute the monthly payment figure
      const rate = Math.pow(1 + (this.interestRate / 100), this.loanYears); // rate between years and interest
      const yearly = (this.loanAmount * rate * (this.interestRate / 100)) / (rate - 1);
      if (isFinite(yearly)) { // if user is nice and put correct data
        this.total = (yearly * this.loanYears).toFixed(2);
        this.interest = ((yearly * this.loanYears) - this.loanAmount).toFixed(2)
      }
    }
    this.updateChart();
  }
  updateChart(): void {
    this.chartData[0].data = [this.loanAmount, this.interest];
  }


}