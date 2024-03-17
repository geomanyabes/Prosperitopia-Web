// item.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ItemListComponent } from './components/item-list/item-list.component';
import { SharedModule } from '../../shared/shared.module';
import { MatLineModule } from '@angular/material/core';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    ItemListComponent,
    ItemTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatTableModule, 
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    ItemListComponent,
    ItemTableComponent
  ]
})
export class ItemModule { }
