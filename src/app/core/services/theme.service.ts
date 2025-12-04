import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'portfolio-theme';
  
  /** Signal reactivo que almacena el tema actual */
  readonly theme = signal<Theme>(this.getInitialTheme());
  
  /** Indica si el tema actual es oscuro */
  readonly isDark = () => this.theme() === 'dark';
  
  constructor() {
    // Efecto que actualiza el DOM cuando cambia el tema
    effect(() => {
      this.applyTheme(this.theme());
    });
  }
  
  /**
   * Obtiene el tema inicial basado en preferencias guardadas o del sistema
   */
  private getInitialTheme(): Theme {
    if (!isPlatformBrowser(this.platformId)) {
      return 'dark';
    }
    
    // Intentar obtener tema guardado
    const savedTheme = localStorage.getItem(this.storageKey) as Theme | null;
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      return savedTheme;
    }
    
    // Detectar preferencia del sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    
    return 'dark';
  }
  
  /**
   * Aplica el tema al documento
   */
  private applyTheme(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.storageKey, theme);
    
    // Actualizar meta theme-color para móviles
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#f5f5f5');
    }
  }
  
  /**
   * Alterna entre tema oscuro y claro
   */
  toggleTheme(): void {
    this.theme.update(current => current === 'dark' ? 'light' : 'dark');
  }
  
  /**
   * Establece un tema específico
   */
  setTheme(theme: Theme): void {
    this.theme.set(theme);
  }
}
