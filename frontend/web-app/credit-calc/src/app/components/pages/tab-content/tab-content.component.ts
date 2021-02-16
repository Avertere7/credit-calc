import {
    Component,
    Input,
    ComponentFactoryResolver,
    ViewChild,
    OnInit
} from "@angular/core";
import { Tab } from "src/app/models/tab.model";
import { ContentContainerDirective } from "../../../directives/content-container.directive";

@Component({
    selector: "app-tab-content",
    template: "<ng-template content-container></ng-template>"
})
export class TabContentComponent implements OnInit {
    @Input() tab;
    @ViewChild(ContentContainerDirective, { static: true })
    contentContainer: ContentContainerDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {
        const tab: Tab = this.tab;
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            tab.component
        );
        const viewContainerRef = this.contentContainer.viewContainerRef;
        viewContainerRef.createComponent(componentFactory);
    }
}