import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links.component';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SocialLinksComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isSubmitting = signal(false);
  isSubmitted = signal(false);
  submitError = signal<string | null>(null);
  
  contactForm: FormGroup;
  
  // TODO: Personalizar con tu información de contacto real
  readonly contactInfo: ContactInfo[] = [
    {
      icon: 'email',
      label: 'Email',
      value: 'tu-email@ejemplo.com',
      link: 'mailto:tu-email@ejemplo.com'
    },
    {
      icon: 'location',
      label: 'Ubicación',
      value: 'Ciudad, País'
    },
    {
      icon: 'phone',
      label: 'Teléfono',
      value: '+00 123 456 789',
      link: 'tel:+00123456789'
    }
  ];
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });
  }
  
  get nameControl() { return this.contactForm.get('name'); }
  get emailControl() { return this.contactForm.get('email'); }
  get subjectControl() { return this.contactForm.get('subject'); }
  get messageControl() { return this.contactForm.get('message'); }
  
  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    
    this.isSubmitting.set(true);
    this.submitError.set(null);
    
    try {
      // TODO: Integrar con backend cuando esté disponible
      // Simular envío por ahora
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(this.contactForm.value)
      // });
      
      this.isSubmitted.set(true);
      this.contactForm.reset();
      
      // Reset después de 5 segundos
      setTimeout(() => {
        this.isSubmitted.set(false);
      }, 5000);
      
    } catch (error) {
      this.submitError.set('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
  
  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    if (!control || !control.errors || !control.touched) {
      return '';
    }
    
    if (control.errors['required']) {
      return 'Este campo es obligatorio';
    }
    if (control.errors['email']) {
      return 'Ingresa un email válido';
    }
    if (control.errors['minlength']) {
      const minLength = control.errors['minlength'].requiredLength;
      return `Mínimo ${minLength} caracteres`;
    }
    
    return '';
  }
}
