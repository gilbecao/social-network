import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PostCreateComponent } from './pages/post-create/post-create.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostEditComponent } from './pages/post-edit/post-edit.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostFilterComponent } from './components/post-filter/post-filter.component';
import { HeaderComponent } from './components/header/header.component';
import { PostCommentComponent } from './components/post-comment/post-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostDetailsComponent,
    PostCreateComponent,
    PostEditComponent,
    PostComponent,
    PostListComponent,
    FooterComponent,
    PostFilterComponent,
    HeaderComponent,
    PostCommentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
