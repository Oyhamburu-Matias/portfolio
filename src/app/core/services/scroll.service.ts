import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private readonly platformId = inject(PLATFORM_ID);
  
  /**
   * Desplaza suavemente hacia una sección por su ID
   */
  scrollToSection(sectionId: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  
  /**
   * Desplaza hacia la parte superior de la página
   */
  scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  /**
   * Obtiene la posición actual de scroll
   */
  getScrollPosition(): number {
    if (!isPlatformBrowser(this.platformId)) {
      return 0;
    }
    
    return window.scrollY || document.documentElement.scrollTop;
  }
  
  /**
   * Verifica si un elemento está visible en el viewport
   */
  isElementInViewport(element: HTMLElement, threshold = 0.1): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return (
      rect.top <= windowHeight * (1 - threshold) &&
      rect.bottom >= windowHeight * threshold
    );
  }
  
  /**
   * Bloquea el scroll del body (útil para modales)
   */
  lockScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    document.body.style.overflow = 'hidden';
  }
  
  /**
   * Desbloquea el scroll del body
   */
  unlockScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    document.body.style.overflow = '';
  }
}
