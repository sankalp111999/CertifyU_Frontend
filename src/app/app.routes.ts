import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/home/home').then(m => m.Home) },
    { path: 'home', loadComponent: () => import('./components/home/home').then(m => m.Home) },
    { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
    { path: 'contact', loadComponent: () => import('./pages/contact-us/contact-us').then(m => m.ContactUs) },
    { path: 'userExams', loadComponent: () => import('./pages/user-exams/user-exams').then(m => m.UserExams) },
    { path: 'videos', loadComponent: () => import('./pages/videos/videos').then(m => m.Videos) },
    { path: 'courses', loadComponent: () => import('./pages/courses/courses').then(m => m.Courses) },
    { path: 'login', loadComponent: () => import('./components/login/login').then(m => m.Login) },
    { path: 'signup', loadComponent: () => import('./components/signup/signup').then(m => m.Signup) },
    {path:'**', redirectTo: 'home'}
];
