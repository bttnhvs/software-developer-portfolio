import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomCursor } from './components/custom-cursor/custom-cursor';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, CustomCursor],
  template: `
    <a class="skip-link" href="#main">Skip to content</a>
    <app-custom-cursor />
    <app-header />
    <main id="main">
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: `
    .skip-link {
      position: absolute;
      left: 16px;
      top: -60px;
      z-index: 100;
      padding: 10px 16px;
      border-radius: 8px;
      background: var(--color-pink);
      color: var(--color-bg);
      font-family: var(--font-mono);
      font-weight: 700;
    }
    .skip-link:focus {
      top: 12px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
