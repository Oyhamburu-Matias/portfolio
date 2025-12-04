import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLinksComponent } from '../social-links/social-links.component';
import { ScrollService } from '../../../core/services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private readonly scrollService = inject(ScrollService);
  
  currentYear = new Date().getFullYear();
  
  readonly footerLinks = [
    { label: 'Inicio', sectionId: 'hero' },
    { label: 'Proyectos', sectionId: 'projects' },
    { label: 'Contacto', sectionId: 'contact' }
  ];
  
  navigateTo(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }
  
  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }
}
