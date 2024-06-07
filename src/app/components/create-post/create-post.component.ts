import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent {
  postForm: FormGroup;
  title: FormControl;
  text: FormControl;
  author: FormControl;
  publishDate: FormControl;
  constructor(public blogService: BlogService) {
    this.title = new FormControl('', Validators.required);
    this.text = new FormControl('', Validators.required);
    this.author = new FormControl('', Validators.required);
    this.publishDate = new FormControl('', Validators.required);

    this.postForm = new FormGroup({
      title: this.title,
      text: this.text,
      author: this.author,
      publishDate: this.publishDate,
    });
  }
  // este metodo se conecta al servicio llama al metodo del servicio y le envia un post
  handleSubmit() {
    this.blogService.create(this.postForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
