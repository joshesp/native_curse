import { Component, Input, ViewContainerRef } from "@angular/core";
import { ItemEventData } from "tns-core-modules/ui/list-view"
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { DayModalComponent } from "../day-modal/day-modal.component";
import { UIService } from "~/app/shared/ui/ui.service";

@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    styleUrls: ['./current-challenge.component.common.css', './current-challenge.component.ios.css', './current-challenge.component.android.css'],
    moduleId: module.id
})
export class CurrentChallengeComponent {
    @Input() currentChallenges: string[] = [];

    constructor(private router: RouterExtensions, private modalDialog: ModalDialogService, private uiServ: UIService, private vcRef: ViewContainerRef) {}

    onItemTap(args: ItemEventData) {
        console.log(args);
    }

    goToEdit() {
        this.router.navigate(['/challenges/edit', {transition: {name: 'slideLeft'}}]);
    }

    onChangeStatus() {
        this.modalDialog.showModal(DayModalComponent, {
            fullscreen: true,
            viewContainerRef:  (this.uiServ.getRootVCRef() ? this.uiServ.getRootVCRef() :  this.vcRef),
            context: { date: new Date() }
        }).then(res => {
            console.log(res);
        });
    }
}