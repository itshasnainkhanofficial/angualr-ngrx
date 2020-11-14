import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { PostComponent } from './container/post/post.component';
import { UserComponent } from './container/user/user.component';

const routes: Routes = [
  {
    path : "",
    component: DashboardComponent,

    children : [

      {path : "", component: UserComponent },
      {path : "post", component: PostComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
