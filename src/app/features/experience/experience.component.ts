import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  // TODO: Personalizar con tu experiencia laboral real
  readonly experiences: Experience[] = [
    {
      id: 1,
      company: 'Empresa Tecnológica ABC',
      position: 'Full Stack Developer',
      period: 'Ene 2023 - Presente',
      description: 'Desarrollo y mantenimiento de aplicaciones web utilizando Angular y Node.js. Implementación de APIs REST, integración con bases de datos y optimización de rendimiento. Colaboración en equipo ágil con metodología Scrum.',
      technologies: ['Angular', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
      current: true
    },
    {
      id: 2,
      company: 'Startup XYZ',
      position: 'Frontend Developer',
      period: 'Mar 2022 - Dic 2022',
      description: 'Desarrollo de interfaces de usuario responsive y accesibles. Implementación de componentes reutilizables y sistemas de diseño. Optimización de la experiencia de usuario y rendimiento de la aplicación.',
      technologies: ['React', 'TypeScript', 'SCSS', 'Redux', 'Jest'],
      current: false
    },
    {
      id: 3,
      company: 'Agencia Digital 123',
      position: 'Junior Web Developer',
      period: 'Jun 2021 - Feb 2022',
      description: 'Desarrollo de sitios web corporativos y landing pages. Maquetación responsive con HTML, CSS y JavaScript. Integración con CMS y mantenimiento de proyectos existentes.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'PHP'],
      current: false
    },
    {
      id: 4,
      company: 'Freelance',
      position: 'Desarrollador Web',
      period: 'Ene 2021 - May 2021',
      description: 'Proyectos independientes de desarrollo web para pequeñas empresas y emprendedores. Diseño y desarrollo de sitios web a medida, optimización SEO básica y soporte técnico.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      current: false
    }
  ];
}
