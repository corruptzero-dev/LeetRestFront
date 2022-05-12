import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import {LandingComponent} from './landing/landing.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    CatalogueComponent,
    LandingComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: LandingComponent},
      {path: 'catalogue', component: CatalogueComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
