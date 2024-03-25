import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpService } from './service/http/http-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    HttpService
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
