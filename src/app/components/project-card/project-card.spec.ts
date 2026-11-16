import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { Project } from '../../models/project.model';
import { ProjectCard } from './project-card';

const baseProject: Project = {
  id: 'demo',
  title: 'Demo App',
  status: 'in-progress',
  kind: 'personal project',
  description: 'A demo project.',
  tags: ['Angular', 'NestJS'],
  repoUrl: 'https://github.com/bttnhvs',
};

function render(project: Project): HTMLElement {
  const fixture = TestBed.createComponent(ProjectCard);
  fixture.componentRef.setInput('project', project);
  fixture.detectChanges();
  return fixture.nativeElement as HTMLElement;
}

describe('ProjectCard', () => {
  it('shows a placeholder and no live link while the project is in progress', () => {
    const el = render(baseProject);

    expect(el.querySelector('.cover-placeholder')).not.toBeNull();
    expect(el.textContent).toContain('in progress');
    expect(el.querySelectorAll('.links a').length).toBe(1);
  });

  it('shows the screenshot and live link once the project is live', () => {
    const el = render({
      ...baseProject,
      status: 'live',
      image: 'img/projects/demo.webp',
      liveUrl: 'https://demo.bettinahevesi.com/',
    });

    expect(el.querySelector('img')?.getAttribute('alt')).toBe('Screenshot of Demo App');
    expect(el.textContent).toContain('demo.bettinahevesi.com ↗');
    expect(el.querySelectorAll('.tag').length).toBe(2);
  });
});
