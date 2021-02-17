import { Type } from '@angular/core';

export class Tab {
    public title: string;
    public component: Type<any>;
    public icon: string;
    public active: boolean;

    constructor(component: Type<any>, title: string, icon: string, active = true) {
        this.component = component;
        this.title = title;
        this.icon = icon;
        this.active = active;
    }
}