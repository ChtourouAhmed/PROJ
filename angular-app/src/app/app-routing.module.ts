import { AboutComponent } from './about/about.component';
import { PreventionTipsComponent } from './prevention-tips/prevention-tips.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 
  { 'path': 'questionaires',   redirectTo: '/questionaires/0', pathMatch: 'full', data: { title: 'My Calendar' } }, 
  { 'path': '',   redirectTo: '/questionaires/0', pathMatch: 'full' }, 
  { 'path':"questionaires/:questionId",component : QuestionnaireComponent, data: { title: 'My Calendar' }},
  { 'path':"preventionTips",component : PreventionTipsComponent , data: { title: 'My Calendar' }},
  { 'path':"aboutUs",component : AboutComponent , data: { title: 'My Calendar' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
