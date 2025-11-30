import { Injectable } from '@angular/core';
import { POSTS2 } from '../db/posts.json';

import { IPost } from '../interfaces/ipost';

@Injectable({
  providedIn: 'root',
})
export class Posts {
  private posts:IPost[]=POSTS2;

  getAll():IPost[]{
    return this.posts;
  }
  insert(post:IPost):string{
    this.posts.push(post);
    return 'Post guardado correctamente';
  }
}
