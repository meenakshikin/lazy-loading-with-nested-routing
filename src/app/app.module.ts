import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appComponents } from './app.include';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './modules/about/about.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, AboutModule],
  declarations: [...appComponents, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
