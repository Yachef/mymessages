import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { Post } from '../post.model'
import { PostService } from '../post.service';
import { PageEvent } from '@angular/material/paginator';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  totalPosts = 0;
  postsPerPage = 5;
  isLoading = false;
  posts: Post[] = []
  currentPage = 1;
  private postsSub:Subscription
  private authStatusSub:Subscription
  userIsAuthenticated = false;
  userId:string;

  constructor(
    private postService:PostService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.userId = this.authService.getUserId();
    this.postService.getPosts(this.postsPerPage, this.currentPage)
    this.postsSub = this.postService.getPostUpdateListener().subscribe((postData:{posts:Post[],postCount:number} ) => {
      this.isLoading = false;
      this.totalPosts = postData.postCount;
      this.posts = postData.posts;
    })
    this.userIsAuthenticated = this.authService.getIsAuth()
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated
      this.userId = this.authService.getUserId();
    })
  }
  ngOnDestroy(){
    this.postsSub.unsubscribe()
    this.authStatusSub.unsubscribe()
  }
  onDelete(postId:string){
    this.isLoading = true;
    this.postService.deletePost(postId).subscribe(()=> {
      this.postService.getPosts(this.postsPerPage, this.currentPage);
    }, () => this.isLoading = false)
  }

  onChangedPage(pageData:PageEvent){
    this.isLoading = true;
    this.currentPage = pageData.pageIndex +1;
    this.postsPerPage = pageData.pageSize;
    this.postService.getPosts(this.postsPerPage, this.currentPage)
  }



}
