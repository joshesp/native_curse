import { Component, Input } from "@angular/core";
import { ItemEventData } from "tns-core-modules/ui/list-view"
import { RouterExtensions } from "nativescript-angular/router";


@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    styleUrls: ['./current-challenge.component.css'],
    moduleId: module.id
})
export class CurrentChallengeComponent {
    @Input() currentChallenges: string[] = [];

    constructor(private router: RouterExtensions) {}

    onItemTap(args: ItemEventData) {
        console.log(args);
    }

    goToEdit() {
        this.router.navigate(['/challenge-edit', {transition: {name: 'slideLeft'}}]);
    }
}