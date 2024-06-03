import { Injectable } from '@angular/core';
import Post from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  post: Post[]; //interface

  constructor() {
    this.post = [
      //poner aqui los campos del objeto de la interface. y despues hay que utilizar el servicio en el componente donde queremos utilizar la lista, poner public etc... en el constructor post list.
    ];
  }

  getAll() {}
}
