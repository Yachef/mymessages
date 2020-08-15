import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { Post } from '../post.model'
import { PostService } from '../post.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  totalPosts = 10;
  postsPerPage = 5;
  pageSizeOptions = [1,2,5,10]
  isLoading = false;
  posts: Post[] = []
  private postsSub:Subscription

  constructor(
    private postService:PostService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.postService.getPosts()
    this.postsSub = this.postService.getPostUpdateListener().subscribe((posts:Post[]) => {
      this.isLoading = false;
      this.posts = posts
    })
  }
  ngOnDestroy(){
    this.postsSub.unsubscribe()
  }
  onDelete(postId:string){
    this.postService.deletePost(postId);
  }

  onChangedPage(pageData:PageEvent){
    console.log(pageData)
  }



}
