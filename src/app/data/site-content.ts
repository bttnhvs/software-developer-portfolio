import { ContactLink, SkillGroup, Testimonial } from '../models/content.model';

/** All editable site content and settings live here and in projects.json. */
export const SITE = {
  name: 'Bettina Hevesi',
  email: 'hevesi.bettina@gmail.com',
  cvPath: 'cv/Bettina-Hevesi-CV.pdf',
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

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'What a warrior — it makes me feel good to know people like Bettina are around. She is an awesome designer who creates fantastic websites. She always delivers on time and is as reliable as this testimonial.',
    author: 'Darth Vader',
    role: 'Sith Lord, Galactic Empire',
    initials: 'DV',
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
  { label: 'cv', text: 'Bettina-Hevesi-CV.pdf', href: SITE.cvPath, download: true },
];
