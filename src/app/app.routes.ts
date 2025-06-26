import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { ContactUs } from './pages/contact-us/contact-us';
import { UserExams } from './pages/user-exams/user-exams';
import { Videos } from './pages/videos/videos';
import { Courses } from './pages/courses/courses';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';


export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/home/home').then(m => m.Home) },
    {path:'about',component: About},
    {path:'contact',component:ContactUs},
    {path:'userExams',component:UserExams},
    {path:'videos',component:Videos},
    {path:'courses',component:Courses},
    {path:'login',component:Login},
    {path:'signup',component:Signup}
];
