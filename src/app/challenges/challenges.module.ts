import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ChallengesRoutingModule } from "./challenges-routing.module";
import { SharedModule } from "../shared/shared.module";

import { ChallengeTabsComponent } from "./challenge-tabs/challenge-tabs.component";

@NgModule({
    declarations: [
        ChallengeTabsComponent
    ],
    imports: [NativeScriptCommonModule, ChallengesRoutingModule, SharedModule]
})
export class ChallengesModule {}