import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoanService } from '../../../services/loan.service';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoComponent } from './tabs/info-tab/info.tab.component';
import { HouseLoanComponent } from './tabs/house-tab/house-loan.component';
import { TabContentComponent } from './tabs/tab-content.component';
import { ContentContainerDirective } from '../../directives/content-container.directive';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
    declarations: [
        HomeComponent,
        HouseLoanComponent,
        InfoComponent,
        ContentContainerDirective,
        TabContentComponent
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSliderModule,
        FormsModule,
        ChartsModule,
        MatButtonModule,
        MatProgressSpinnerModule

    ],
    exports: [
        HomeComponent
    ],
    providers: [
        LoanService
    ],
    entryComponents: [HouseLoanComponent, InfoComponent]

})
export class HomeModule { }
