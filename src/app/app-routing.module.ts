import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PropertiDetailComponent } from './pages/home/components/properti-detail/properti-detail.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeLatestPropertyComponent } from './pages/home/components/home-latest-property/home-latest-property.component';
import { ManagementComponent } from './pages/management/management.component';
import { HomeAgentsComponent } from './pages/home/components/home-agents/home-agents.component';
import { PropertyComponent } from './pages/property/property.component';
import { AgentsComponent } from './pages/agents/agents.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';

const routes: Routes = [


  {path:'',component:HomeComponent},
  { path: 'propertydetail/:id', component: PropertiDetailComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'about', component: AboutComponent},
  { path: 'property', component: PropertyComponent },
  { path: 'management', component: ManagementComponent},
  { path: 'agents', component: AgentsComponent},
  { path: 'blogs', component: BlogComponent},
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' } 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
