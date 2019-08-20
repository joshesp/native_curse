import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { UIService } from "./shared/ui/ui.service";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy { 
    @ViewChild(RadSideDrawerComponent, {static: false}) drawerComponent: RadSideDrawerComponent;

    challenges: string[] = [];
    private drawerSubs: Subscription;
    private drawer: RadSideDrawer;

    constructor(private uiService: UIService, private changeDetectionRef: ChangeDetectorRef) {}

    ngOnInit() {
        this.drawerSubs = this.uiService.drawerState.subscribe(() => {
            if (this.drawer) {
                this.drawer.toggleDrawerState();
            }
        });
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;

        this.changeDetectionRef.detectChanges()
    }

    ngOnDestroy() {
        if (this.drawerSubs) {
            this.drawerSubs.unsubscribe();
        }
    }

    onSetChallenge(event: string) {
        this.challenges.push(event);
    }
}
