import { Injectable } from '@angular/core';
import Post from '../models/models';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  API_URL = 'https://my-json-server.typicode.com/mariogiron/blog-server/posts';
  posts: Post[]; //interface

  constructor(private http: HttpClient) {
    this.posts = [];
  }
  getAll() {
    return this.http.get<Post[]>(this.API_URL);
  }

  getById(id: number) {
    return this.http.get<Post>(`${this.API_URL}/${id}`);
  }

  create(post: Post) {
    return this.http.post<Post>(this.API_URL, post);
  }
}
