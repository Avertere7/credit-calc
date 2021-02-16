import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleComponent } from './tabs/example.component';

@NgModule({
    declarations: [
        HomeComponent,
        ExampleComponent,
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        BrowserAnimationsModule
    ],
    exports: [
        HomeComponent
    ],
    providers: [
    ]
})
export class HomeModule { }
