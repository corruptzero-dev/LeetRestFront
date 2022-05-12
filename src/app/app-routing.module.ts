import {NgModule} from '@angular/core';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {CatalogueComponent} from "./catalogue/catalogue.component";
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from "./landing/landing.component";

const routes: Routes = [
  {path: 'admin', component: AdminPanelComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: '', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
