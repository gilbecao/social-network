import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PostCreateComponent } from './pages/post-create/post-create.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostEditComponent } from './pages/post-edit/post-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'edit', component: PostEditComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
