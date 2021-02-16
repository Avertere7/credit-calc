import { Type } from '@angular/core';

export class Tab {
    public title: string;
    public component: Type<any>;
    public icon: string;

    constructor(component: Type<any>, title: string, icon) {
        this.component = component;
        this.title = title;
        this.icon = icon;
    }
}