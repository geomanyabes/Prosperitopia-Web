import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './module/item/item-list/item-list.component';
import { ItemDetailsComponent } from './module/item/item-details/item-details.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './module/category/category-details/category-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemListComponent },
  { path: 'items/:id', component: ItemDetailsComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/:id', component: CategoryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
