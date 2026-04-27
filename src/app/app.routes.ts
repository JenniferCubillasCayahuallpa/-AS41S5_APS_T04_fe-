import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { AnimalsComponent } from './features/animals/components/animals.component';
import { AnimalFormComponent } from './features/animals/components/animals-form/animal-form.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'animals/form', component: AnimalFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];