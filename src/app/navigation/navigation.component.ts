import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  indx = 1;

  constructor() { }

  ngOnInit() {

  }
  activeme(index) {

    this.indx = index;
  }
}
