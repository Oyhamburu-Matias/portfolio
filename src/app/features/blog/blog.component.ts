import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
  tags: string[];
  slug: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  // TODO: Estos son posts placeholder. Integrar con backend cuando esté disponible
  readonly blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Introducción a Angular 17: Nuevas características',
      excerpt: 'Explora las últimas novedades de Angular 17, incluyendo signals, nuevo control flow y mejoras de rendimiento que transformarán tu desarrollo.',
      date: '15 Nov 2023',
      readTime: '5 min',
      tags: ['Angular', 'Frontend', 'TypeScript'],
      slug: 'introduccion-angular-17'
    },
    {
      id: 2,
      title: 'Creando APIs REST con FastAPI y Python',
      excerpt: 'Guía práctica para construir APIs modernas y eficientes utilizando FastAPI, el framework más rápido de Python.',
      date: '28 Oct 2023',
      readTime: '8 min',
      tags: ['Python', 'FastAPI', 'Backend'],
      slug: 'apis-rest-fastapi'
    },
    {
      id: 3,
      title: 'Mejores prácticas de TypeScript para 2024',
      excerpt: 'Tips y técnicas avanzadas de TypeScript para escribir código más limpio, seguro y mantenible en tus proyectos.',
      date: '10 Oct 2023',
      readTime: '6 min',
      tags: ['TypeScript', 'JavaScript', 'Best Practices'],
      slug: 'typescript-mejores-practicas'
    }
  ];
  
  openPost(slug: string): void {
    // TODO: Navegar a la página de detalle del post
    console.log('Abrir post:', slug);
    // this.router.navigate(['/blog', slug]);
  }
}
