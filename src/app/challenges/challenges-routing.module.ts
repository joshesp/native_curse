import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ChallengeTabsComponent } from "./challenge-tabs/challenge-tabs.component";

const routes: Routes = [
    { path: 'tabs', component: ChallengeTabsComponent, children: [
        { path: 'today', loadChildren: '~/app/today/today.module#TodayModule', outlet: 'today' },
        { path: 'current-challenge', loadChildren: '~/app/challenges/current-challenge/current-challenge.module#CurrentChallengeModule', outlet: 'currentChallenge' }
    ] },
    { path: ':mode', loadChildren: '~/app/challenges/challenge-edit/challenge-edit.module#ChallengeEditModule' },
    { path: '', redirectTo: '/challenges/tabs', pathMatch: 'full' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ChallengesRoutingModule {}