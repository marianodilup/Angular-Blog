import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BlogService } from '../../services/blog.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  constructor(public blogService: BlogService) {}
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.blogService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.blogService.posts = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
