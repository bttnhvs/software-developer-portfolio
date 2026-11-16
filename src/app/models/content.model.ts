export interface SkillGroup {
  label: string;
  tone: 'pink' | 'cyan' | 'green';
  skills: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

export interface ContactLink {
  label: string;
  text: string;
  href: string;
  download?: boolean;
}
