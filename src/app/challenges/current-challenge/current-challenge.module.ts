import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SharedModule } from "~/app/shared/shared.module";
import { CurrentChallengeComponent } from "./current-challenge.component";


const routeChild = [
    { path: '', component: CurrentChallengeComponent }
];

@NgModule({
    declarations: [CurrentChallengeComponent],
    imports: [NativeScriptCommonModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routeChild), SharedModule]
})
export class CurrentChallengeModule {}