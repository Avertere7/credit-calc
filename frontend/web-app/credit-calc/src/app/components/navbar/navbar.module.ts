import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatMenuModule
    ],
    exports: [
        NavbarComponent
    ],
    providers: [

    ],
    entryComponents: [

    ]
})
export class NavbarModule { }
