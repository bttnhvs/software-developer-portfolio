import { ContactLink, SkillGroup } from '../models/content.model';

/** All editable site content and settings live here and in projects.json. */
export const SITE = {
  name: 'Bettina Hevesi',
  email: 'hevesi.bettina@gmail.com',
  cvPath: 'cv/bettina-hevesi-software-dev-cv.pdf',
  /**
   * Formspree form endpoint, e.g. "https://formspree.io/f/abcdwxyz".
   * Leave empty until the Formspree form is created – the form then shows a fallback message.
   */
  formspreeEndpoint: '',
  /** URL of the small-business website. Leave empty to hide the "Small business owner?" line. */
  smallBusinessSiteUrl: '',
} as const;

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'frontend',
    tone: 'pink',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'RxJS', 'HTML5', 'CSS3 / SCSS'],
  },
  { label: 'backend', tone: 'cyan', skills: ['NestJS', 'Node.js', 'REST APIs'] },
  {
    label: 'design',
    tone: 'green',
    skills: ['UI design', 'Wireframes', 'Prototyping', 'Responsive'],
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  { label: 'email', text: SITE.email, href: `mailto:${SITE.email}` },
  {
    label: 'linkedin',
    text: 'linkedin.com/in/bettina-hevesi',
    href: 'https://www.linkedin.com/in/bettina-hevesi/',
  },
  { label: 'github', text: 'github.com/bttnhvs', href: 'https://github.com/bttnhvs' },
  { label: 'cv', text: 'bettina-hevesi-software-dev-cv.pdf', href: SITE.cvPath, download: true },
];
