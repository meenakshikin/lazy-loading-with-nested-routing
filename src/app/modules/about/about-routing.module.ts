import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { AboutComponent } from './about.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {
    path: '', component: AboutComponent,
    children: [
      {
        path: 'description', component: DescriptionComponent, children: [
          { path: 'comments', loadChildren: './../comments/comments.module#CommentsModule' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }