import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageRoute } from 'nativescript-angular/router';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css']
})
export class ChallengeEditComponent implements OnInit {
  @Output() input = new EventEmitter<string>();
  challengedDescription = '';

  isCreating = true;
  
  constructor(private activatedRoute: ActivatedRoute, private pageRoute: PageRoute) { }
  
  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe(
    //   data => {
    //     console.log(data.get('mode'));
    //   }
    // );

    this.pageRoute.activatedRoute.subscribe(activatedRoute => {
      activatedRoute.paramMap.subscribe(data => {
        console.log(data.get('mode'));
      });
    });
  }

  onSetChallenge() {
      this.input.emit(this.challengedDescription);
  }
}
