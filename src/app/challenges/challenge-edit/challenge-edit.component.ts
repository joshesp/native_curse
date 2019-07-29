import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css']
})
export class ChallengeEditComponent implements OnInit {
  @Output() input = new EventEmitter<string>();
  challengedDescription = '';
  
  constructor() { }
  
  ngOnInit() {
  }

  onSetChallenge() {
      this.input.emit(this.challengedDescription);
  }
}
