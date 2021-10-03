import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  messageToChild = ""
  childMessage = ''

  getMessage = (e: string) => {
    this.childMessage = e
  }

  constructor() { }

  ngOnInit(): void {
  }

}
