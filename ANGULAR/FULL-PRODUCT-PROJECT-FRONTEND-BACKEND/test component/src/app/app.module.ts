import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IncdecComponent } from './incdec/incdec.component';
import { HomeComponent } from './home/home.component';
import { SampleComponent } from './sample/sample.component';
import { DataComponent } from './data/data.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IncdecComponent,
    HomeComponent,
    SampleComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
