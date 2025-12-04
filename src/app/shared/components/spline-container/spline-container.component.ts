import { Component, Input, ElementRef, AfterViewInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

/**
 * Componente contenedor preparado para integrar objetos 3D de Spline.
 * 
 * Para integrar Spline:
 * 1. Instalar: npm install @splinetool/runtime
 * 2. Importar en el componente: import { Application } from '@splinetool/runtime';
 * 3. Descomentar el código en ngAfterViewInit()
 * 
 * Ejemplo de uso:
 * <app-spline-container 
 *   splineUrl="https://prod.spline.design/xxxxx/scene.splinecode"
 *   [height]="400">
 * </app-spline-container>
 */
@Component({
  selector: 'app-spline-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spline-container.component.html',
  styleUrl: './spline-container.component.scss'
})
export class SplineContainerComponent implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly elementRef = inject(ElementRef);
  
  /** URL del archivo Spline (.splinecode) */
  @Input() splineUrl = '';
  
  /** Altura del contenedor en píxeles o 'auto' */
  @Input() height: number | 'auto' = 400;
  
  /** Mostrar indicador de carga */
  @Input() showLoading = true;
  
  /** Mensaje de placeholder cuando no hay URL */
  @Input() placeholderText = 'Espacio reservado para objeto 3D';
  
  isLoading = true;
  hasError = false;
  private splineApp: unknown = null;
  
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    if (this.splineUrl) {
      this.loadSplineScene();
    } else {
      this.isLoading = false;
    }
  }
  
  ngOnDestroy(): void {
    // Limpiar la instancia de Spline si existe
    if (this.splineApp) {
      // (this.splineApp as any).dispose?.();
      this.splineApp = null;
    }
  }
  
  private async loadSplineScene(): Promise<void> {
    try {
      /*
       * === INTEGRACIÓN CON SPLINE ===
       * 
       * Para habilitar Spline, sigue estos pasos:
       * 
       * 1. Instala el runtime de Spline:
       *    npm install @splinetool/runtime
       * 
       * 2. Descomenta el siguiente código:
       * 
       * import { Application } from '@splinetool/runtime';
       * 
       * const canvas = this.elementRef.nativeElement.querySelector('.spline-canvas');
       * if (canvas) {
       *   const spline = new Application(canvas);
       *   await spline.load(this.splineUrl);
       *   this.splineApp = spline;
       * }
       * 
       * 3. Añade un <canvas class="spline-canvas"></canvas> al template
       * 
       * 4. Obtén tu URL de Spline desde spline.design
       *    Ejemplo: https://prod.spline.design/xxxxx/scene.splinecode
       */
      
      // Simular carga para demostración
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.isLoading = false;
      
    } catch (error) {
      console.error('Error cargando escena de Spline:', error);
      this.hasError = true;
      this.isLoading = false;
    }
  }
  
  getContainerStyle(): Record<string, string> {
    return {
      height: this.height === 'auto' ? 'auto' : `${this.height}px`
    };
  }
}
