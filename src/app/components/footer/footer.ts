import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE } from '../../data/site-content';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly year = new Date().getFullYear();
  protected readonly smallBusinessSiteUrl = SITE.smallBusinessSiteUrl;
}
