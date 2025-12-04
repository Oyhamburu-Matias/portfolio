import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  activeCategory = signal<string>('frontend');
  
  // TODO: Personalizar con tus habilidades reales y niveles
  readonly categories: SkillCategory[] = [
    {
      name: 'Frontend',
      icon: 'frontend',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3 / SCSS', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'Angular', level: 85 },
        { name: 'React', level: 75 },
        { name: 'Vue.js', level: 70 }
      ]
    },
    {
      name: 'Backend',
      icon: 'backend',
      skills: [
        { name: 'Node.js', level: 82 },
        { name: 'Python', level: 80 },
        { name: 'FastAPI', level: 75 },
        { name: 'Express.js', level: 78 },
        { name: 'NestJS', level: 70 },
        { name: 'REST APIs', level: 88 }
      ]
    },
    {
      name: 'Bases de Datos',
      icon: 'database',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 78 },
        { name: 'MySQL', level: 75 },
        { name: 'Redis', level: 65 },
        { name: 'Firebase', level: 70 }
      ]
    },
    {
      name: 'Herramientas',
      icon: 'tools',
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'Docker', level: 72 },
        { name: 'Linux', level: 75 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 68 }
      ]
    },
    {
      name: 'Otros',
      icon: 'other',
      skills: [
        { name: 'Metodologías Ágiles', level: 80 },
        { name: 'Testing', level: 72 },
        { name: 'CI/CD', level: 68 },
        { name: 'AWS', level: 60 },
        { name: 'GraphQL', level: 65 }
      ]
    }
  ];
  
  setActiveCategory(categoryName: string): void {
    this.activeCategory.set(categoryName.toLowerCase());
  }
  
  getActiveSkills(): Skill[] {
    const category = this.categories.find(
      c => c.name.toLowerCase() === this.activeCategory()
    );
    return category?.skills || [];
  }
  
  getCategoryId(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}
