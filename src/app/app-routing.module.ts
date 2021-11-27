import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ReposComponent } from './components/repos/repos.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'', component: MainPageComponent},
  {path:'users', component: UsersComponent},
  {path:'repos', component: ReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
