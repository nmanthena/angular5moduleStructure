import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class MessageComponent implements OnInit {

@Input() message:any;

  constructor() { }

  ngOnInit() {
  }

}
