import { Injectable } from '@angular/core';
import { POSTS } from '../db/posts.db';
import { IPost } from '../interfaces/ipost';

@Injectable({
  providedIn: 'root',
})
export class Posts {
  private posts:IPost[]=POSTS;

  getAll():IPost[]{
    return this.posts;
  }
  insert(post:IPost):string{
    this.posts.push(post);
    return 'Post guardado correctamente';
  }
}
