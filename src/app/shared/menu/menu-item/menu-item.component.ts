import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  HostListener,
  Optional,
} from '@angular/core';
import { MenuComponent } from '../menu.component';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() public menuFor!: TemplateRef<MenuComponent>;

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  public viewContainerRef!: ViewContainerRef;

  @HostListener('mouseenter') onMouseEnter() {
    this.addTemplate(this.menuFor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.viewContainerRef.clear();
  }

  constructor(@Optional() private parent: MenuComponent) {}

  private addTemplate(temp: TemplateRef<any>) {
    if (temp) {
      this.viewContainerRef.createEmbeddedView(temp);
    }
  }

  public containerCssClass(): string {
    return this.isRoot() ? 'menu-btn--root' : 'menu-btn--leaf';
  }

  private isRoot(): boolean {
    return this.parent ? true : false;
  }
}
