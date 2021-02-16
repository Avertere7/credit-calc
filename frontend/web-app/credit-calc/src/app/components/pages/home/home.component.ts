import { Component, OnInit } from '@angular/core';
import { Tab } from "../../../models/tab.model";
import { ExampleComponent } from './tabs/example.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  public tabs: Tab[] = [
    new Tab(ExampleComponent, "Comp1 View", { parent: "AppComponent" }),
    new Tab(ExampleComponent, "Comp2 View", { parent: "AppComponent" })
  ];


  constructor(

  ) { }

  public async ngOnInit(): Promise<any> {
  }

}
