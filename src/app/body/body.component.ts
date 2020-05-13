import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

 @Input()
 title: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Body Works from  body.component.ts';
  }

}
