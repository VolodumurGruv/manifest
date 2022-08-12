import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    MenuItemComponent,
    HeaderComponent,
  ],
  imports: [AppRoutingModule],
  exports: [LayoutComponent, AppRoutingModule, HeaderComponent],
})
export class SharedModule {}
