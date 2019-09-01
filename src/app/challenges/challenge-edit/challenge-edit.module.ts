import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SharedModule } from "~/app/shared/shared.module";

import { ChallengeEditComponent } from "./challenge-edit.component";

const routeChild = [
    { path: '', component: ChallengeEditComponent }
];

@NgModule({
    declarations: [ChallengeEditComponent],
    imports: [NativeScriptCommonModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routeChild), SharedModule]
})
export class ChallengeEditModule {}