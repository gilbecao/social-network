import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PostCreateComponent } from './pages/post-create/post-create.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostEditComponent } from './pages/post-edit/post-edit.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostDetailsComponent,
    PostCreateComponent,
    PostEditComponent,
    PostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
