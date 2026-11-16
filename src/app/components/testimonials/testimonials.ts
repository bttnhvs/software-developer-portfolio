import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TESTIMONIALS } from '../../data/site-content';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonials {
  protected readonly testimonials = TESTIMONIALS;
}
