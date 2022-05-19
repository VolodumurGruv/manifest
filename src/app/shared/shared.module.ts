import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';

@NgModule({
  declarations: [LayoutComponent, MenuComponent, MenuItemComponent],
  imports: [],
})
export class SharedModule {}
