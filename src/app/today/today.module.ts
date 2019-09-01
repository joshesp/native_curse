import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SharedModule } from "~/app/shared/shared.module";
import { TodayComponent } from "./today.component";


const routeChild = [
    { path: '', component: TodayComponent }
];

@NgModule({
    declarations: [TodayComponent],
    imports: [NativeScriptCommonModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routeChild), SharedModule]
})
export class TodayModule {}