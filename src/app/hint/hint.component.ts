import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../movie';

@Component({
  selector: 'gtm-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
