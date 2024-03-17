import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ItemModule } from './modules/item/item.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
