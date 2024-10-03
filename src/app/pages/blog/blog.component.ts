import {
  Component,
  HostListener,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PostComponent } from './post/post.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { CommonModule } from '@angular/common';
import { ArrowUpComponent } from '../../components/arrow-up/arrow-up.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    PostComponent,
    PersonalInfoComponent,
    CommonModule,
    ArrowUpComponent,
    ArrowUpComponent,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
  isExpanded = false;
  public innerWidth: any;

  expandedStates: { [key: string]: boolean } = {};

  constructor() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.checkScreenSize();
  }

  private checkScreenSize() {
    if (this.innerWidth < 768) {
      console.log('Tela de mobile detectada');
    } else {
      this.isExpanded = true;
      console.log('Tela de desktop detectada');

      for (const id in this.expandedStates) {
        this.expandedStates[id] = true;
      }
    }
  }

  toggleTextFromChild(data: { isExpanded: boolean, id: string }) {
    const { isExpanded, id } = data;
    this.expandedStates[id] = isExpanded;
    console.log(this.expandedStates);

    console.log(`O componente com ID "${id}" foi clicado. Novo estado: ${isExpanded ? 'Expandido' : 'Recolhido'}`);
  }

  isComponentExpanded(componentId: string): boolean {
    return this.expandedStates[componentId] || false;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
