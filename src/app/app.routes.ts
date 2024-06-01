import { Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { PostListComponent } from './components/post-list/post-list.component';

export const routes: Routes = [
  { path: 'create-post', component: CreatePostComponent },
  { path: 'detail-post', component: DetailPostComponent },
  { path: 'post-list', component: PostListComponent },
];
