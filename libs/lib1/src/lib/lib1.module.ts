import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1Component } from './lib1.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib1Component],
  exports: [Lib1Component],
})
export class Lib1Module {}
