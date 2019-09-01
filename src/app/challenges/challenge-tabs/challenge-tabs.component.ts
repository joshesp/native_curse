import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-challenge-tabs',
  templateUrl: './challenge-tabs.component.html',
  styleUrls: ['./challenge-tabs.component.css', './challenge-tabs.component.ios.css', './challenge-tabs.component.android.css']
})
export class ChallengeTabsComponent implements OnInit {

  constructor(private router: RouterExtensions, private activated: ActivatedRoute, private page: Page) { }

  ngOnInit() {
    this.router.navigate([{outlets: {currentChallenge: ['current-challenge'], today: ['today']}}], {relativeTo: this.activated});
    // this.page.actionBarHidden = true;
  }

}
