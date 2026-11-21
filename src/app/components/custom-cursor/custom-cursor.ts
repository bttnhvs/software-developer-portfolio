import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  afterNextRender,
  effect,
  inject,
  signal,
} from '@angular/core';

const INTERACTIVE_SELECTOR = 'a, button, [data-cursor-hover]';

/**
 * Decorative cursor: a pink dot with a cyan ring that turns into a "</>" badge over links and buttons.
 * Only active on devices with a fine pointer and when the user has not asked for reduced motion.
 */
@Component({
  selector: 'app-custom-cursor',
  template: `
    @if (enabled()) {
      <div
        class="ring"
        [class.ring--hover]="hovering()"
        [class.visible]="visible()"
        [style.transform]="transform()"
        aria-hidden="true"
      >
        &lt;/&gt;
      </div>
      <div
        class="dot"
        [class.visible]="visible()"
        [style.transform]="transform()"
        aria-hidden="true"
      ></div>
    }
  `,
  styleUrl: './custom-cursor.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:mousemove)': 'onMove($event)',
    '(document:mouseout)': 'onOut($event)',
  },
})
export class CustomCursor {
  private readonly document = inject(DOCUMENT);

  protected readonly enabled = signal(false);
  protected readonly visible = signal(false);
  protected readonly hovering = signal(false);
  protected readonly transform = signal('translate(-100px, -100px)');

  constructor() {
    afterNextRender(() => {
      const view = this.document.defaultView;
      if (!view) return;
      const finePointer = view.matchMedia('(hover: hover) and (pointer: fine)').matches;
      const reducedMotion = view.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.enabled.set(finePointer && !reducedMotion);
    });

    // Hide the native cursor only while the custom one is shown.
    effect(() => {
      this.document.documentElement.classList.toggle(
        'has-custom-cursor',
        this.enabled() && this.visible(),
      );
    });
  }

  protected onMove(event: MouseEvent): void {
    if (!this.enabled()) return;
    this.transform.set(`translate(${event.clientX}px, ${event.clientY}px)`);
    const target = event.target as Element | null;
    this.hovering.set(!!target?.closest?.(INTERACTIVE_SELECTOR));
    this.visible.set(true);
  }

  protected onOut(event: MouseEvent): void {
    if (event.relatedTarget === null) {
      this.visible.set(false);
    }
  }
}
