import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private router: Router) {}

  navigateToSobre(): void {
    this.router.navigate(['/sobre']);
  }

  navigateToBlog(): void {
    this.router.navigate(['/blog']);
  }

  navigateToContato(): void {
    this.router.navigate(['/contato']);
  }
}
