import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {
  messageToParent = ""

  @Output() childMessage = new EventEmitter<string>()

  send = () => {
    this.childMessage.emit(this.messageToParent)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
