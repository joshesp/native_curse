import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent { 
    challenge = '';

    onSetChallenge(event: string) {
        this.challenge = event;
    }
}
