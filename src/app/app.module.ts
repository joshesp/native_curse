import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { AppComponent } from "./app.component";
import { CurrentChallengeComponent } from "./challenges/current-challenge/current-challenge.component";
import { ChallengeEditComponent } from "./challenges/challenge-edit/challenge-edit.component";
import { AuthComponent } from "./auth/auth.component";
import { TodayComponent } from "./today/today.component";
import { AppRoutingModule } from "./app-routing.module";

// import { StackComponent } from './layouts/stack/stack.component';
// import { GridComponent } from './layouts/grid/grid.component';
// import { AbsoluteComponent } from "./layouts/absolute/absolute.component";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        CurrentChallengeComponent,
        ChallengeEditComponent,
        AuthComponent,
        TodayComponent
        // StackComponent,
        // GridComponent,
        // AbsoluteComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
