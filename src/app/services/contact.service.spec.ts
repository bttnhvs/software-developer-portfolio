import { TestBed } from '@angular/core/testing';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ContactMessage, ContactService } from './contact.service';

const validMessage: ContactMessage = {
  name: 'Jane Smith',
  email: 'jane@company.com',
  subject: 'Frontend role',
  message: 'Hi Bettina, I would like to talk about a role.',
  website: '',
};

describe('ContactService', () => {
  afterEach(() => vi.restoreAllMocks());

  it('treats a filled-in honeypot as spam and sends nothing', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    const service = TestBed.inject(ContactService);

    const result = await service.send({ ...validMessage, website: 'http://spam.example' });

    expect(result).toBe('spam');
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('reports "not-configured" while no Formspree endpoint is set', async () => {
    const service = TestBed.inject(ContactService);
    (service as unknown as { endpoint: string }).endpoint = '';

    expect(await service.send(validMessage)).toBe('not-configured');
  });

  it('posts the message to Formspree and reports success', async () => {
    const fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(new Response('{}', { status: 200 }));
    const service = TestBed.inject(ContactService);
    (service as unknown as { endpoint: string }).endpoint = 'https://formspree.io/f/test';

    expect(await service.send(validMessage)).toBe('sent');
    expect(fetchSpy).toHaveBeenCalledWith(
      'https://formspree.io/f/test',
      expect.objectContaining({ method: 'POST' }),
    );
  });

  it('reports "failed" when the request errors', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('offline'));
    const service = TestBed.inject(ContactService);
    (service as unknown as { endpoint: string }).endpoint = 'https://formspree.io/f/test';

    expect(await service.send(validMessage)).toBe('failed');
  });
});
