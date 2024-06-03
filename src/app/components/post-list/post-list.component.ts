import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  constructor(public blogService: BlogService) {}
}
