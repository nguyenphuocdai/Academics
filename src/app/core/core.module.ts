import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ],
  declarations: [FooterComponent, HeaderComponent],
  exports: [FooterComponent, HeaderComponent]
})
export class CoreModule { }
