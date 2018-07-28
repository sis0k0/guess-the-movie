import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Movie } from '../movie';

@Component({
  selector: 'gtm-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HintComponent {
  @Input() movie: Movie;
}
