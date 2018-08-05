import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent],
  declarations: [ HeaderComponent],
})
export class AllCommonModule { }
