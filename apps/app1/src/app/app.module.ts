import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Lib1Module } from '@my-workspace/lib1';
import { CounterComponent } from './counter/counter.component';
import { CounterWrapperComponent } from './counter-wrapper/counter-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    CounterComponent,
    CounterWrapperComponent,
  ],
  imports: [BrowserModule, Lib1Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
