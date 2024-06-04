import { Injectable } from '@angular/core';
import Post from '../models/models';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  heading: string;
  posts: Post[]; //interface

  constructor() {
    this.heading = ' Blog List';
    //poner aqui los campos del objeto de la interface. y despues hay que utilizar el servicio en el componente donde queremos utilizar la lista, poner public etc... en el constructor post list.
    this.posts = [
      {
        id: 1,
        title: 'Introducción a Python',
        text: 'Python se ha convertido en uno de los lenguajes de programación más populares. En este post, exploramos sus fundamentos y cómo empezar.',
        author: 'Juan Pérez',
        publishDate: '2024-02-01',
      },
      {
        id: 2,
        title: '¿Qué es la Programación Orientada a Objetos?',
        text: 'La Programación Orientada a Objetos (POO) es un paradigma de programación que utiliza objetos y clases en su enfoque. Aprende más sobre ello aquí.',
        author: 'Ana Gómez',
        publishDate: '2024-02-05',
      },
      {
        id: 3,
        title: 'Primeros pasos en JavaScript',
        text: 'JavaScript es esencial para el desarrollo web. Este post te guiará a través de los conceptos básicos para comenzar a programar con JavaScript.',
        author: 'Carlos López',
        publishDate: '2024-02-10',
      },
      {
        id: 4,
        title: 'Frameworks de Python: Django vs Flask',
        text: 'Django y Flask son dos de los frameworks de Python más populares. En este post, comparamos sus diferencias y similitudes para ayudarte a elegir el adecuado.',
        author: 'Lucía Martínez',
        publishDate: '2024-02-15',
      },
    ];
  }
  getAll(title: string): Post | undefined {
    return this.posts.find((post) => post.title === title);
  }

  getById() {}

  create(post: Post): void {
    this.posts.push(post);
  }
}
