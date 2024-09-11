import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/']);
  }

  navigateToSobre(): void {
    this.router.navigate(['/sobre']);
  }

  navigateToBlog(): void {
    this.router.navigate(['/blog']);
  }

  navigateToContato(): void {
    this.router.navigate(['/contato']);
  }

toggleMenu(): void {
  this.isMenuOpen = !this.isMenuOpen;
}
}
