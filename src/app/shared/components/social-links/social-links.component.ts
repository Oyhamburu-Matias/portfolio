import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() showLabels = false;
  
  // TODO: Actualizar con tus URLs reales
  readonly socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/tu-usuario',
      icon: 'github',
      ariaLabel: 'Visitar perfil de GitHub'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/tu-usuario',
      icon: 'linkedin',
      ariaLabel: 'Visitar perfil de LinkedIn'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/tu-usuario',
      icon: 'twitter',
      ariaLabel: 'Visitar perfil de Twitter'
    },
    {
      name: 'Email',
      url: 'mailto:tu-email@ejemplo.com',
      icon: 'email',
      ariaLabel: 'Enviar un correo electrónico'
    }
  ];
}
