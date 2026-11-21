import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface NavItem {
  index: string;
  label: string;
  anchor: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  protected readonly menuOpen = signal(false);

  protected readonly navItems: NavItem[] = [
    { index: '01.', label: 'projects', anchor: 'projects' },
    { index: '02.', label: 'about', anchor: 'about' },
    { index: '03.', label: 'cv', anchor: 'resume' },
    { index: '04.', label: 'contact', anchor: 'contact' },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
