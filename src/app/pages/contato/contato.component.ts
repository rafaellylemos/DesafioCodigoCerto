import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
})
export class ContatoComponent {
  isSpan01: boolean = false;
  isSpan02: boolean = false;

  showSpan01(state: boolean) {
    this.isSpan01 = state;
  }

  showSpan02(state: boolean) {
    this.isSpan02 = state;
  }

  ngAfterViewInit(): void {
    document.querySelector('.contato')?.classList.add('loaded');
  }
}
