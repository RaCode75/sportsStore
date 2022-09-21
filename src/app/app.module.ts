import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store/store.component';
import { StoreModule } from './store/store/store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
