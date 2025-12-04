import { Component, inject, signal, HostListener, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { ScrollService } from '../../../core/services/scroll.service';

interface NavItem {
  label: string;
  sectionId: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private readonly scrollService = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);
  
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  
  readonly navItems: NavItem[] = [
    { label: 'Inicio', sectionId: 'hero' },
    { label: 'Sobre Mí', sectionId: 'about' },
    { label: 'Habilidades', sectionId: 'skills' },
    { label: 'Proyectos', sectionId: 'projects' },
    { label: 'Experiencia', sectionId: 'experience' },
    { label: 'Educación', sectionId: 'education' },
    { label: 'Blog', sectionId: 'blog' },
    { label: 'Contacto', sectionId: 'contact' }
  ];
  
  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 50);
    }
  }
  
  navigateTo(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
    this.closeMobileMenu();
  }
  
  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(isOpen => !isOpen);
  }
  
  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
