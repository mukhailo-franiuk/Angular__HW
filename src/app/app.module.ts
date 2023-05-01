import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home03Component } from './home03/home03.component';
import { ChildComponent } from './home03/child/child.component';
import { Home04Component } from './home04/home04.component';
import { SortPipeFirstName } from './home04/sort.pipe';
import { ArrowUpPipe } from './home04/arrow-up.pipe';
import { ArrowDownPipe } from './home04/arrow-down.pipe';
import { SortLPipe } from './home04/sort-l.pipe';
import { SortNPipe } from './home04/sort-n.pipe';
import { SearshPipe } from './home04/searsh.pipe';
import { SearshLPipe } from './home04/searsh-l.pipe';
import { SearshNPipe } from './home04/searsh-n.pipe';
import { Home05Component } from './home05/home05.component';
import { WormsComponent } from './home05/worms/worms.component';
import { CenzorComponent } from './home05/worms/cenzor/cenzor.component';
import { ListTaskComponent } from './home05/worms/list-task/list-task.component';
import { ListUserComponent } from './home05/worms/list-user/list-user.component';




@NgModule({
  declarations: [
    AppComponent,
    Home03Component,
    ChildComponent,
    Home04Component,
    SortPipeFirstName,
    ArrowUpPipe,
    ArrowDownPipe,
    SortLPipe,
    SortNPipe,
    SearshPipe,
    SearshLPipe,
    SearshNPipe,
    Home05Component,
    WormsComponent,
    CenzorComponent,
    ListTaskComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
