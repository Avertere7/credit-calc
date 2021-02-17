import { Component, OnInit } from '@angular/core';
import { Tab } from "../../../models/tab.model";
import { InfoComponent } from './tabs/info-tab/info.tab.component';
import { HouseLoanComponent } from './tabs/house-tab/house-loan.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  public tabs: Tab[] = [
    new Tab(InfoComponent, '', ''),
    new Tab(HouseLoanComponent, 'House Loan', 'home'),
    new Tab(HouseLoanComponent, 'Car Loan', 'directions_car', false),
    new Tab(HouseLoanComponent, 'Open Loan', 'payments', false)
  ];
  selectedTab = 0;


  constructor() { }

  public async ngOnInit(): Promise<any> {
  }

}
