import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Page2Component } from './page2/page2.component';

export const routesRoot: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  { path: 'page2', component: Page2Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routesRoot)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule {}
