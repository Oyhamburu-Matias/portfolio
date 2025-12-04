import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  selectedFilter = signal<string>('all');
  selectedProject = signal<Project | null>(null);
  
  // TODO: Personalizar con tus proyectos reales
  readonly projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración. Incluye gestión de inventario y reportes de ventas.',
      image: 'assets/images/project-1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: 'https://demo-ecommerce.ejemplo.com',
      repoUrl: 'https://github.com/tu-usuario/ecommerce',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con funcionalidad de arrastrar y soltar, etiquetas personalizables y colaboración en tiempo real entre usuarios.',
      image: 'assets/images/project-2.jpg',
      technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind'],
      demoUrl: 'https://demo-tasks.ejemplo.com',
      repoUrl: 'https://github.com/tu-usuario/task-app',
      featured: true
    },
    {
      id: 3,
      title: 'API REST Blog',
      description: 'API REST completa para un sistema de blog con autenticación JWT, roles de usuario, comentarios y sistema de likes.',
      image: 'assets/images/project-3.jpg',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      repoUrl: 'https://github.com/tu-usuario/blog-api',
      featured: false
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      description: 'Panel de control interactivo con visualización de datos en tiempo real, gráficos dinámicos y exportación de reportes en múltiples formatos.',
      image: 'assets/images/project-4.jpg',
      technologies: ['Vue.js', 'D3.js', 'Express', 'MySQL'],
      demoUrl: 'https://demo-dashboard.ejemplo.com',
      featured: true
    }
  ];
  
  readonly allTechnologies: string[] = [
    ...new Set(this.projects.flatMap(p => p.technologies))
  ].sort();
  
  getFilteredProjects(): Project[] {
    const filter = this.selectedFilter();
    if (filter === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => 
      p.technologies.some(t => t.toLowerCase() === filter.toLowerCase())
    );
  }
  
  setFilter(tech: string): void {
    this.selectedFilter.set(tech);
  }
  
  openProjectModal(project: Project): void {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }
  
  closeProjectModal(): void {
    this.selectedProject.set(null);
    document.body.style.overflow = '';
  }
}
