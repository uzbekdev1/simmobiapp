import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrepayComponent } from './prepay.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: PrepayComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  declarations: [PrepayComponent]
})
export class PrepayModule { }
