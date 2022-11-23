import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    HeaderComponent,
  ],
  imports: [AppRoutingModule, MaterialModule],
  exports: [LayoutComponent, AppRoutingModule, HeaderComponent],
})
export class SharedModule {}
