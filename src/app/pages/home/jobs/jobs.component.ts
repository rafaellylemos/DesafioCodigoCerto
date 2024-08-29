import { Component } from '@angular/core';
import { JobCardComponent } from './job-card/job-card.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobCardComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

}
