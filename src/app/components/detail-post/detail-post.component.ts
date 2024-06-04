import { Component } from '@angular/core';
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
export class DetailPostComponent {
  selectedPost: Post;

  constructor(private route: ActivatedRoute, public blogService: BlogService) {
    const postName = route.snapshot.params['postName'];
    this.selectedPost = blogService.getById(postName);
  }
}
