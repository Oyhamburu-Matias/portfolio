import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplineContainerComponent } from '../../shared/components/spline-container/spline-container.component';

interface PersonalInfo {
  label: string;
  value: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SplineContainerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  // TODO: Personalizar con tu información real
  readonly personalInfo: PersonalInfo[] = [
    { label: 'Nombre', value: 'Tu Nombre Completo', icon: 'user' },
    { label: 'Ubicación', value: 'Ciudad, País', icon: 'location' },
    { label: 'Email', value: 'tu-email@ejemplo.com', icon: 'email' },
    { label: 'Experiencia', value: '+X años', icon: 'briefcase' }
  ];
  
  // TODO: Personalizar con tu biografía
  readonly biography = `
    Soy un desarrollador Full Stack apasionado por crear soluciones tecnológicas 
    innovadoras y experiencias digitales memorables. Con experiencia en desarrollo 
    web moderno, disfruto trabajando tanto en el frontend como en el backend, 
    siempre buscando aprender nuevas tecnologías y metodologías.
    
    Mi enfoque se centra en escribir código limpio, escalable y mantenible, 
    mientras colaboro efectivamente en equipos multidisciplinarios. Me motiva 
    resolver problemas complejos y ver cómo las ideas se transforman en productos 
    funcionales que impactan positivamente a los usuarios.
  `;
  
  // TODO: Personalizar con tus intereses
  readonly interests = [
    'Desarrollo Web',
    'Inteligencia Artificial',
    'Diseño UI/UX',
    'Open Source',
    'Gaming',
    'Música'
  ];
}
