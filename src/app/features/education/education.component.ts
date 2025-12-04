import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description?: string;
  type: 'degree' | 'certification' | 'course';
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  // TODO: Personalizar con tu educación y certificaciones reales
  readonly educationItems: Education[] = [
    {
      id: 1,
      institution: 'Universidad Nacional',
      degree: 'Licenciatura en Sistemas de Información',
      period: '2018 - 2022',
      description: 'Formación integral en desarrollo de software, bases de datos, redes y gestión de proyectos tecnológicos.',
      type: 'degree'
    },
    {
      id: 2,
      institution: 'Instituto Tecnológico',
      degree: 'Técnico en Programación',
      period: '2016 - 2018',
      description: 'Fundamentos de programación, algoritmos y estructuras de datos.',
      type: 'degree'
    }
  ];
  
  readonly certifications: Education[] = [
    {
      id: 3,
      institution: 'Coursera',
      degree: 'Full Stack Web Development',
      period: '2023',
      type: 'certification'
    },
    {
      id: 4,
      institution: 'Udemy',
      degree: 'Angular - The Complete Guide',
      period: '2023',
      type: 'certification'
    },
    {
      id: 5,
      institution: 'freeCodeCamp',
      degree: 'JavaScript Algorithms and Data Structures',
      period: '2022',
      type: 'certification'
    },
    {
      id: 6,
      institution: 'AWS',
      degree: 'Cloud Practitioner',
      period: '2022',
      type: 'certification'
    },
    {
      id: 7,
      institution: 'Google',
      degree: 'UX Design Certificate',
      period: '2021',
      type: 'course'
    },
    {
      id: 8,
      institution: 'Platzi',
      degree: 'Escuela de JavaScript',
      period: '2021',
      type: 'course'
    }
  ];
}
