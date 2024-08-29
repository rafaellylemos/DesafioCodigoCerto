import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  @Input() img01: string = '';
  @Input() img02: string = '';
  @Input() img03: string = '';
  @Input() img04: string = '';
  @Input() img05: string = '';
  @Input() img06: string = '';
}
