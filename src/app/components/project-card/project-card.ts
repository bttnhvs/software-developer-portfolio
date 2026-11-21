import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input.required<Project>();

  protected readonly statusLabel = computed(() =>
    this.project().status === 'live' ? '● live' : '◐ in progress',
  );

  protected readonly liveUrlLabel = computed(() => {
    const url = this.project().liveUrl;
    return url ? url.replace(/^https?:\/\//, '').replace(/\/$/, '') : '';
  });
}
