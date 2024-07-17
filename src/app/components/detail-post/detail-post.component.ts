import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import Post from '../../models/models';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-detail-post',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.css',
})
export class DetailPostComponent implements OnInit {
  selectedPost: any;
  constructor(private route: ActivatedRoute, public blogService: BlogService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['postId'];
    this.getById(id); // variable creada anteriormente para obtener el parametro.
  }
  getById(id: number) {
    this.blogService.getById(id).subscribe({
      next: (data) => {
        console.log(data);
        this.selectedPost = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
