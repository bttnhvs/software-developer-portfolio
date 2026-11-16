import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from '../../components/about/about';
import { Contact } from '../../components/contact/contact';
import { Hero } from '../../components/hero/hero';
import { Projects } from '../../components/projects/projects';
import { Resume } from '../../components/resume/resume';
import { Testimonials } from '../../components/testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [Hero, Projects, About, Testimonials, Resume, Contact],
  template: `
    <app-hero />
    <app-projects />
    <app-about />
    <app-testimonials />
    <app-resume />
    <app-contact />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
