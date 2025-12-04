import { Component, OnInit, OnDestroy, PLATFORM_ID, inject, signal, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links.component';
import { SplineContainerComponent } from '../../shared/components/spline-container/spline-container.component';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SocialLinksComponent, SplineContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly scrollService = inject(ScrollService);
  private readonly ngZone = inject(NgZone);
  
  // Textos para el efecto de typing
  readonly typingTexts = [
    'Full Stack Developer',
    'Desarrollador Web',
    'Creador de Experiencias Digitales',
    'Apasionado por la Tecnología'
  ];
  
  currentTypingText = signal('');
  private typingIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimeout?: ReturnType<typeof setTimeout>;
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Start typing after initial render to avoid ExpressionChangedAfterItHasBeenChecked
      setTimeout(() => this.startTypingEffect(), 100);
    }
  }
  
  ngOnDestroy(): void {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
  }
  
  private startTypingEffect(): void {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;
    
    const type = (): void => {
      const currentText = this.typingTexts[this.typingIndex];
      
      if (!this.isDeleting) {
        // Typing
        this.ngZone.run(() => {
          this.currentTypingText.set(currentText.substring(0, this.charIndex + 1));
        });
        this.charIndex++;
        
        if (this.charIndex === currentText.length) {
          this.isDeleting = true;
          this.typingTimeout = setTimeout(type, pauseTime);
          return;
        }
      } else {
        // Deleting
        this.ngZone.run(() => {
          this.currentTypingText.set(currentText.substring(0, this.charIndex - 1));
        });
        this.charIndex--;
        
        if (this.charIndex === 0) {
          this.isDeleting = false;
          this.typingIndex = (this.typingIndex + 1) % this.typingTexts.length;
        }
      }
      
      this.typingTimeout = setTimeout(type, this.isDeleting ? deleteSpeed : typeSpeed);
    };
    
    type();
  }
  
  scrollToProjects(): void {
    this.scrollService.scrollToSection('projects');
  }
  
  scrollToContact(): void {
    this.scrollService.scrollToSection('contact');
  }
  
  scrollDown(): void {
    this.scrollService.scrollToSection('about');
  }
}
