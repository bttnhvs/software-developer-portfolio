import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTACT_LINKS, SITE } from '../../data/site-content';
import { ContactService } from '../../services/contact.service';

type FormState = 'idle' | 'sending' | 'sent' | 'error' | 'not-configured';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly contactService = inject(ContactService);

  protected readonly links = CONTACT_LINKS;
  protected readonly email = SITE.email;
  protected readonly state = signal<FormState>('idle');

  protected readonly form = inject(NonNullableFormBuilder).group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.maxLength(150)],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]],
    website: [''],
  });

  protected showError(field: 'name' | 'email' | 'message'): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || control.dirty);
  }

  protected async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.state.set('sending');
    const result = await this.contactService.send(this.form.getRawValue());

    switch (result) {
      case 'sent':
      case 'spam':
        this.state.set('sent');
        this.form.reset();
        break;
      case 'not-configured':
        this.state.set('not-configured');
        break;
      case 'failed':
        this.state.set('error');
        break;
    }
  }
}
