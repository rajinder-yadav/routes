import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';

export const itemsRoutesChild: Routes = [
  {
    path: 'page1', component: Page1Component, children: [
      { path: 'item1', component: Item1Component, outlet: 'item' },
      { path: 'item2', component: Item2Component, outlet: 'item' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(itemsRoutesChild)
  ],
  exports: [
    RouterModule
  ]
})
export class ItemRoutesModule { }
