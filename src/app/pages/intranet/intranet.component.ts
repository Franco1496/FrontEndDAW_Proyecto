import { Component, OnInit } from '@angular/core';

declare function customInitFunctions(): void;

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: []
})

export class IntranetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    customInitFunctions();
  }



}
