import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
})
export class Courses {
  selectedCategory = 'All';
  searchTerm = '';
  showAvailableTests = false;

  categories = ['All', 'Angular', 'React', 'Azure', '.Net Core', 'Java', 'SQL', 'AWS'];

  courses = [
  {
    title: 'Azure',
    description: 'Learn about Microsoft Azure, its key services...',
    category: 'Azure',
    availableTest: true,
    questions: 85
  },
  {
    title: 'Azure Functions',
    description: 'Create serverless apps using Azure Functions...',
    category: 'Azure',
    availableTest: true,
    questions: 20
  },
  {
    title: 'Angular Core',
    description: 'Master Angular SPA Framework fundamentals...',
    category: 'Angular',
    availableTest: false,
    questions: 30
  },
  {
    title: 'SQL Basics',
    description: 'Structured Query Language fundamentals...',
    category: 'SQL',
    availableTest: true,
    questions: 40
  },
  {
    title: 'AWS Essentials',
    description: 'Introduction to Amazon Web Services...',
    category: 'AWS',
    availableTest: false,
    questions: 25
  },
  {
    title: 'React Fundamentals',
    description: 'Learn JSX, props, state, and component lifecycle...',
    category: 'React',
    availableTest: true,
    questions: 35
  },
  {
    title: 'React with Hooks',
    description: 'Master useState, useEffect, and custom hooks...',
    category: 'React',
    availableTest: true,
    questions: 20
  },
  {
    title: 'ASP.NET Core API',
    description: 'Build RESTful APIs with .NET Core and C#...',
    category: '.Net Core',
    availableTest: false,
    questions: 32
  },
  {
    title: 'Entity Framework Core',
    description: 'Access databases using LINQ and EF Core...',
    category: '.Net Core',
    availableTest: true,
    questions: 18
  },
  {
    title: 'Java OOPs Concepts',
    description: 'Understand inheritance, polymorphism, encapsulation...',
    category: 'Java',
    availableTest: true,
    questions: 28
  },
  {
    title: 'SQL Joins & Aggregates',
    description: 'Deep dive into INNER, LEFT, RIGHT joins and GROUP BY...',
    category: 'SQL',
    availableTest: false,
    questions: 22
  },
  {
    title: 'AWS Lambda',
    description: 'Learn event-driven programming with AWS Lambda...',
    category: 'AWS',
    availableTest: true,
    questions: 30
  },
  {
    title: 'Angular Forms & Validation',
    description: 'Reactive and template-driven forms in Angular...',
    category: 'Angular',
    availableTest: true,
    questions: 15
  },
  {
    title: 'Java Spring Boot Intro',
    description: 'Develop microservices with Spring Boot...',
    category: 'Java',
    availableTest: false,
    questions: 20
  },
  {
    title: 'Azure Storage Accounts',
    description: 'Explore Blob, Table, and File storage services...',
    category: 'Azure',
    availableTest: true,
    questions: 26
  }
];


  get filteredCourses() {
    const term = this.searchTerm.trim().toLowerCase();
    return this.courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(term) || course.description.toLowerCase().includes(term);
      const matchesCategory = this.selectedCategory === 'All' || course.category === this.selectedCategory;
      const matchesTest = !this.showAvailableTests || course.availableTest;
      return matchesSearch && matchesCategory && matchesTest;
    });
  }
}
