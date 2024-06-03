import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-detail-post',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.css',
})
export class DetailPostComponent {}
