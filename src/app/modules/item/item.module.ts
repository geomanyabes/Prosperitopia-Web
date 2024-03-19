// item.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './components/item-list/item-list.component';
import { SharedModule } from '../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    ItemListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatTableModule, 
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule
  ],
  exports: [
    ItemListComponent
  ]
})
export class ItemModule { }
