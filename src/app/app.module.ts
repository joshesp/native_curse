import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";

import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { AppRoutingModule } from "./app-routing.module";
import { DayModalComponent } from "./challenges/day-modal/day-modal.component";

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
        NativeScriptUISideDrawerModule,
        AppRoutingModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        AuthComponent,
        DayModalComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [
        DayModalComponent
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
