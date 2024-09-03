import {  Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JobsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToFotografia(): void {
    this.router.navigate(['/sobre']);
  }

  navigateToDesenvolvimento(): void {
    this.router.navigate(['/sobre']);
  }
}
