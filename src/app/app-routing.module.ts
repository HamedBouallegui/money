import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { PlansComponent } from './plans/plans.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'feature', component: FeatureComponent },
  { path: 'plan', component: PlansComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/feature', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/feature' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }