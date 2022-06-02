import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: "aboutMe", pathMatch: 'full' },
  { path:'header', component: HeaderComponent},
  { path:'aboutMe', component: AboutMeComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
