import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArrowUpComponent } from '../../components/arrow-up/arrow-up.component';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [ArrowUpComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
})
export class SobreComponent {
  constructor(private router: Router) {}

  navigateToBlog(): void {
    this.router.navigate(['/blog']);
  }

  scrollToTop() {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    });
  }

}
