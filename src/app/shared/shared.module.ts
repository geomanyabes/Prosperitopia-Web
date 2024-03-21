import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchToolbarComponent } from './component/search-toolbar/search-toolbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    SearchToolbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    SearchToolbarComponent
  ]
})
export class SharedModule { }
