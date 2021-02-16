import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoComponent } from './tabs/info.tab.component';
import { ExampleComponent } from './tabs/example.component';
import { TabContentComponent } from './tabs/tab-content.component';
import { ContentContainerDirective } from '../../directives/content-container.directive';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    declarations: [
        HomeComponent,
        ExampleComponent,
        InfoComponent,
        ContentContainerDirective,
        TabContentComponent
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    exports: [
        HomeComponent
    ],
    providers: [
    ],
    entryComponents: [ExampleComponent, InfoComponent]

})
export class HomeModule { }
