import { Injectable } from '@angular/core';
import { SITE } from '../data/site-content';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot field – real visitors never fill it in. */
  website: string;
}

export type SendResult = 'sent' | 'spam' | 'not-configured' | 'failed';

/** Sends contact form messages through Formspree (no own backend needed). */
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly endpoint: string = SITE.formspreeEndpoint;

  async send(message: ContactMessage): Promise<SendResult> {
    if (message.website.trim() !== '') {
      // Bot filled in the hidden field: pretend success, send nothing.
      return 'spam';
    }
    if (!this.endpoint) {
      return 'not-configured';
    }

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: message.name,
          email: message.email,
          _subject: message.subject || 'New message from bettinahevesi.com',
          message: message.message,
        }),
      });
      return response.ok ? 'sent' : 'failed';
    } catch {
      return 'failed';
    }
  }
}
