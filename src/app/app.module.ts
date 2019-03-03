import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { FavoriteButtonComponent } from './shared/components/favorite-button/favorite-button.component';
import { CollapseButtonComponent } from './shared/components/collapse-button/collapse-button.component';
import { AuthDirective } from './shared/directives/auth.directive';
import { SafePipe } from './shared/pipes/safe.pipe';
import { ScriptLoaderModule } from 'ngx-script-loader';
import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    FavoriteButtonComponent,
    CollapseButtonComponent,
    AuthDirective,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScriptLoaderModule,
    CoreModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
