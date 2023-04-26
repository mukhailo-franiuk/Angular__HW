import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    SearshNPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
