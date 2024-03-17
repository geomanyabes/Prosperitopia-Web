// item-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';

const routes: Routes = [
  { path: 'items', component: ItemListComponent },
  { path: 'items/:id', component: ItemDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
