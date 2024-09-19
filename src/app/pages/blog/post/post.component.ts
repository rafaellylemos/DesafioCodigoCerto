import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements AfterViewInit{
  @Input() img01: string = '';
  @Input() img02: string = '';
  @Input() img03: string = '';
  @Input() img04: string = '';
  @Input() img05: string = '';
  @Input() img06: string = '';

  @ViewChild('textContent') textContent!: ElementRef<HTMLDivElement>;

  isExpanded = false;
  initialVisibleLines = 15;
  linesPerClick = 7;

  ngAfterViewInit() {
    this.updateVisibleLines();
  }

  updateVisibleLines() {
    if (this.textContent) {
      const content = this.textContent.nativeElement;
      const lineHeight = parseFloat(getComputedStyle(content).lineHeight);
    
      content.style.maxHeight = `${this.initialVisibleLines * lineHeight}px`;
    }
  }

  toggleText() {
    const content = this.textContent.nativeElement;
    const lineHeight = parseFloat(getComputedStyle(content).lineHeight);
    const contentHeight = content.scrollHeight;
  
    if (this.isExpanded) {
      this.initialVisibleLines = 15;
      this.isExpanded = false;
    } else {
      this.initialVisibleLines += this.linesPerClick;
      
      if (this.initialVisibleLines * lineHeight >= contentHeight) {
        this.initialVisibleLines = Math.floor(contentHeight / lineHeight);
        this.isExpanded = true; 
      }
    }
    
    this.updateVisibleLines();
  }
}
