import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE } from '../../data/site-content';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.html',
  styleUrl: './resume.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Resume {
  protected readonly cvPath = SITE.cvPath;
}
