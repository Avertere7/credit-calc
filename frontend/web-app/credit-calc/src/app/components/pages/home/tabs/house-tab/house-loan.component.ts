
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
  public loanYear = 0;
  lineChartData: ChartDataSets[] = [
    { data: [85, 72], backgroundColor: ['#c6dff5', '#060144'] },
  ];

  lineChartLabels: Label[] = ['Principal Amount', 'Interest amount'];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'pie';

  formatLabel(value: number): string {
    if (value >= 1000 && value <= 999999) {
      return Math.round(value / 1000) + 'k';
    } else if (value >= 1000000) {
      return (Math.round(value) / 1000000).toFixed(1) + 'm';
    }
    return value.toString();
  }
}