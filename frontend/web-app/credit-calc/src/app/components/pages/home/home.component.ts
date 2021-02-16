import { Component, OnInit } from '@angular/core';
import { Tab } from "../../../models/tab.model";
import { InfoComponent } from './tabs/info.tab.component';
import { ExampleComponent } from './tabs/example.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  public tabs: Tab[] = [
    new Tab(InfoComponent, '', ''),
    new Tab(ExampleComponent, "House Loan", 'home'),
    new Tab(ExampleComponent, "Car Loan", 'directions_car'),
    new Tab(ExampleComponent, "Open Loan", 'payments')
  ];
  selectedTab = 0;


  constructor(

  ) { }

  public async ngOnInit(): Promise<any> {
  }

}
