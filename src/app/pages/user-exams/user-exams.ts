import { Component } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-user-exams',
  standalone: true,
  imports: [NgIf,NgFor, NgClass],
  templateUrl: './user-exams.html',
  styleUrl: './user-exams.css'
})
export class UserExams {
  userExams = [
  {
    title: '.NET Core - Entity Framework Core',
    description: 'Dive into Entity Framework Core...',
    status: 'Completed',
    startedOn: 'Jan 26, 2025',
    finishedOn: 'Jan 26, 2025'
  },
  {
    title: 'Angular - Service',
    description: 'Learn about Angular Services...',
    status: 'In Progress',
    startedOn: 'Jan 26, 2025',
    finishedOn: 'In Progress'
  },
  {
    title: '.NET Core - Entity Framework Core',
    description: 'Dive into Entity Framework Core...',
    status: 'Completed',
    startedOn: 'Jan 26, 2025',
    finishedOn: 'Jan 26, 2025'
  },
  {
    title: '.NET Core - Entity Framework Core',
    description: 'Dive into Entity Framework Core...',
    status: 'Completed',
    startedOn: 'Jan 26, 2025',
    finishedOn: 'Jan 26, 2025'
  },
  {
    title: '.NET Core - Entity Framework Core',
    description: 'Dive into Entity Framework Core...',
    status: 'Completed',
    startedOn: 'Jan 26, 2025',
    finishedOn: 'Jan 26, 2025'
  },
  {
    title: '.NET Core - Entity Framework Core',
    description: 'Dive into Entity Framework Core...',
    status: 'Completed',
    startedOn: 'Jan 26, 2025',
    finishedOn: 'Jan 26, 2025'
  },
  {
    title: '.NET Core - Entity Framework Core',
    description: 'Dive into Entity Framework Core...',
    status: 'Completed',
    startedOn: 'Jan 26, 2025',
    finishedOn: 'Jan 26, 2025'
  },
  {
    title: '.NET Core - Entity Framework Core',
    description: 'Dive into Entity Framework Core...',
    status: 'Completed',
    startedOn: 'Jan 26, 2025',
    finishedOn: 'Jan 26, 2025'
  },
  {
    title: '.NET Core - Entity Framework Core',
    description: 'Dive into Entity Framework Core...',
    status: 'Completed',
    startedOn: 'Jan 26, 2025',
    finishedOn: 'Jan 26, 2025'
  },
  {
    title: '.NET Core - Entity Framework Core',
    description: 'Dive into Entity Framework Core...',
    status: 'Completed',
    startedOn: 'Jan 26, 2025',
    finishedOn: 'Jan 26, 2025'
  },
  {
    title: '.NET Core - Entity Framework Core',
    description: 'Dive into Entity Framework Core...',
    status: 'Completed',
    startedOn: 'Jan 26, 2025',
    finishedOn: 'Jan 26, 2025'
  },
  {
    title: '.NET Core - Entity Framework Core',
    description: 'Dive into Entity Framework Core...',
    status: 'Completed',
    startedOn: 'Jan 26, 2025',
    finishedOn: 'Jan 26, 2025'
  }
];

}
