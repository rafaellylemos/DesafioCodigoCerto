import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PostComponent, PersonalInfoComponent, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
 
}
