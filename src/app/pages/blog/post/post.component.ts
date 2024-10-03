import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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


  @Output() toggle = new EventEmitter<{ isExpanded: boolean, id: string }>(); 
  @Input() isExpandedPost: boolean = false;
  @Input() id: string = '';


  ngAfterViewInit() {
  }
    toggleTextPost() {
      this.isExpandedPost = !this.isExpandedPost;
      this.toggle.emit({ isExpanded: this.isExpandedPost, id: this.id });
    }
  
  
}
