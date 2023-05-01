import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WormsComponent } from './home05/worms/worms.component';
import { CenzorComponent } from './home05/worms/cenzor/cenzor.component';
import { ListTaskComponent } from './home05/worms/list-task/list-task.component';
import { ListUserComponent } from './home05/worms/list-user/list-user.component';

const routes: Routes = [
{path:'',component:WormsComponent},
{path:'worms/cenzor',component:CenzorComponent},
{path:'worms/tasks',component:ListTaskComponent},
{path:'worms/user-list',component:ListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
